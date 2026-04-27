
const db = require('../utils/db');
const state = require('../utils/state');
const socket = require('../utils/socket');
const { execFile } = require('child_process');
const path = require('path');
const fs = require('fs');
const redirectPage = require('./redirect_page')
const httpAPI = require("../utils/http_api");
const payService = require('../service/pay_service');


const BASE_PORT = 7100

class ServerManager {


    maxPort = BASE_PORT;
    restaurants = {}

    constructor() {
        this.reserveManager_max_id = 0
        this.orderManager_max_id = 0
    }

    normalizeOrderPrefix(value) {
        return String(value || "")
            .trim()
            .toUpperCase()
            .replace(/[^A-Z0-9]/g, "")
            .slice(0, 5);
    }

    createRandomOrderPrefix() {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let value = "";
        for (let i = 0; i < 5; i++) {
            const idx = Math.floor(Math.random() * chars.length);
            value += chars[idx];
        }
        return value;
    }

    async ensureServerOrderPrefix(serverData) {
        if (!serverData) return "";

        const current = this.normalizeOrderPrefix(serverData.orderPrefix);
        if (current.length === 5) {
            serverData.orderPrefix = current;
            return current;
        }

        const datas = await db.getAll(db.serverTable);
        const used = new Set(
            datas
                .map((item) => this.normalizeOrderPrefix(item?.orderPrefix))
                .filter((item) => item.length === 5)
        );

        let candidate = "";
        for (let i = 0; i < 1000; i++) {
            const next = this.createRandomOrderPrefix();
            if (!used.has(next)) {
                candidate = next;
                break;
            }
        }

        if (!candidate) {
            throw new Error("Failed to generate unique orderPrefix");
        }

        serverData.orderPrefix = candidate;
        return candidate;
    }

    async init() {

        const datas = await db.getAll(db.serverTable);
        for (let i = 0; i < datas.length; i++) {
            const params = datas[i]
            this.setRestaurants(params)
        }

        console.log(this.restaurants)

        httpAPI.get("/get_info", async (query) => {
            return await this.get_info()
        });

        socket.registerMessage("addServer", this.addServer.bind(this));
        socket.registerMessage("setServer", this.setServer.bind(this));
        socket.registerMessage("deleteServer", this.deleteServer.bind(this));
        socket.registerMessage("getAllServer", this.getAllServer.bind(this));


        socket.registerMessage("g_set_menu", this.set_menu.bind(this));
        socket.registerMessage("g_get_menu", this.get_menu.bind(this));

        socket.registerMessage("g_get_config", this.get_config.bind(this));
        socket.registerMessage("resetServerPassword", this.resetServerPassword.bind(this));

        socket.registerMessage("center_manual_update", this.manual_update.bind(this));

        this.maxPort = await db.getValue("server_max_id", BASE_PORT);

        this.menu_data = {}

    }

    async setServer(params) {
        // console.log("setServer", params);
        params.orderPrefix = this.normalizeOrderPrefix(params.orderPrefix);
        await this.ensureServerOrderPrefix(params);

        await db.set(db.serverTable, params);
        payService.updateServerRouteCacheEntry(params);

        socket.broadcast("set_server_"+params.id, params);

        redirectPage.updateStore(params)
        this.setRestaurants(params)
        
        return {
            result: true,
        }
    }

    async deleteServer(params) {
        if (!params.id) {
            return {
                result: false,
                message: "Missing server ID"
            }
        }

        await db.del(db.serverTable, params.id);
        payService.removeServerRouteCacheEntry(params.id);
        
        // Remove from restaurants map if exists
        for (const [key, value] of Object.entries(this.restaurants)) {
            if (value === params.id) {
                delete this.restaurants[key];
            }
        }

        return {
            result: true,
            id: params.id
        }
    }

    async addServer(params) {

        const name = params.id;
        const server_port = this.maxPort;


        const serverData = await db.get(db.serverTable, name);
        if (serverData) {
            return {
                result: false,
                message: "has record."
            }
        }

        if (params.url == undefined) {
            this.maxPort = this.maxPort + 1;
            await db.setValue("server_max_id", this.maxPort);

            try {

                const callback = (error, stdout, stderr) => {
                    if (error) console.error(`执行错误: ${error}`);
                    else console.log(`输出: ${stdout}`);
                };

                const scriptPath = path.resolve(process.cwd(), '../generate-pm2-config.sh');
                if (!fs.existsSync(scriptPath)) {
                    throw new Error(`can't find: ${scriptPath}`);
                }

                execFile(scriptPath, [server_port, name, 'true'], {cwd: path.dirname(scriptPath)}, callback);

            } catch (e) {
                console.log(e)
            }

            params.url = `https://v.xiaoxiong.pt:${server_port}`;
        }

        if (!params.permissionsControl) {
            params.permissionsControl = {
                order: true,
                delivery: true,
                reserver: true,
                vip: true,
                fandays: false,
            }
        }

        if (!params.customDishesControl) {
           params.customDishesControl = {
               1: {enabled: false, name: 'Sushi Aleatória®'},
               2: {enabled: false, name: 'Poke Bowl'},
               3: {enabled: false, name: 'MY BOX'},
               4: {enabled: false, name: 'bibimbap'},
               5: {enabled: false, name: 'XIAOXIONG® RAMEN'},
               6: {enabled: false, name: 'Menu Almoço'},
               7: {enabled: false, name: 'Xiaoxiong® Hotpot'},
               8: {enabled: false, name: '小食代套餐'}
           }
        }

        await this.ensureServerOrderPrefix(params);

        console.log("params", params);
        await db.set(db.serverTable, params);
        payService.updateServerRouteCacheEntry(params);

        redirectPage.updateStore(params)
        this.setRestaurants(params)

        return {
            result: true,
            data: params,
        };
    }

    setRestaurants(params) {
        //console.log(params)
        if (params.shopify_name && params.shopify_name != "") {
            //console.log("map restaurant: " + params.shopify_name  + " -> " + params.id);
            this.restaurants[params.shopify_name] = params.id
        }
    }

    async getAllServer() {
        const datas = await db.getAll(db.serverTable);
        return {
            result: true,
            datas: datas,
            states: state.getAllStates(),
        }
    }

    async getMenuKey(name) {
        const data = await db.get(db.serverTable,name);
        if (data) {
            return data.takeaway_key;
        }
        return undefined;
    }

    async get_menu(name,socket) {

        // console.log("get_menu:", name);

        const key = await this.getMenuKey(name)
        // console.log("get_menu key:", key);
        if (!key) return undefined;

        const data = this.menu_data[key];
        if(data)
        {
            if ((!socket.menu_time) || (socket.menu_time < data.time)) {

                // console.log("send menu data")

                socket.menu_time = data.time
                return data.data;
            }
        }

        return undefined
    }

    async set_menu({key, menuData}) {

        // console.log("set_menu:", {key});

        this.menu_data[key] = {
            time: Date.now(),
            data: menuData,
        };

        return {

        }
    }

    async get_config(data,socket){
        // console.log("get_config", data);

        const result = { success: false, data: undefined, permissionsControl: undefined}

        try{
            let server = await db.get(db.serverTable,data.id)

            if(server){
                for(const key in data){
                    server[key] = data[key];
                }

                await this.ensureServerOrderPrefix(server);

                await db.set(db.serverTable, server);
                payService.updateServerRouteCacheEntry(server);

                socket.restaurant_data = { id:data.id }
                result.data = "Change to Statu Online"

            }else{
                await this.addServer(data)
                server = await db.get(db.serverTable, data.id)
                result.data = "Create new Server"

            }

            state.setStatusOnline(data.id, true)
            const customDishesControl = {
                1: {enabled: false, name: 'Sushi Aleatória®'},
                2: {enabled: false, name: 'Poke Bowl'},
                3: {enabled: false, name: 'MY BOX'},
                4: {enabled: false, name: 'bibimbap'},
                5: {enabled: false, name: 'XIAOXIONG® RAMEN'},
                6: {enabled: false, name: 'Menu Almoço'},
                7: {enabled: false, name: 'Xiaoxiong® Hotpot'},
                8: {enabled: false, name: '小食代套餐'}
            }
            result.permissionsControl = server.permissionsControl
            result.permissionsControl.customDishesControl = {
                ...customDishesControl,
                ...server.customDishesControl
            }
            result.orderPrefix = server.orderPrefix

            result.success = true
            return result

        }catch (e){
            result.data = e.message
            return result
        }

    }


    async resetServerPassword(params) {
        if (!params.id) {
            return { result: false, message: "Missing restaurant ID" };
        }
        
        console.log(`Resetting password for restaurant: ${params.id}`);
        const result = await socket.sendToRestaurant(params.id, "manager_resetPassword", "admin");
        
        return {
            result: result && result.success,
            data: result ? result.data : "Unknown error",
        };
    }

    async manual_update(id){
        console.log("Center Manual Update, restaurant id: ",id)
        socket.broadcast("center_manual_update_"+id)
    }

    async get_info() {
        let reserve_count = this.reserveManager_max_id - 1;
        let order_count = this.orderManager_max_id - 1;

        return {
            reserve_count,
            order_count
        }
    }

}


const serverManager =  new ServerManager();
module.exports = serverManager;