
const db = require('../utils/db');
const state = require('../utils/state');
const socket = require('../utils/socket');
const { execFile } = require('child_process');
const path = require('path');
const fs = require('fs');
const redirectPage = require('./redirect_page')
const httpAPI = require("../utils/http_api");

const BASE_PORT = 7100

class ServerManager {


    maxPort = BASE_PORT;
    restaurants = {}

    constructor() {

    }

    async init() {

        const datas = await db.getAll(db.serverTable);
        for (let i = 0; i < datas.length; i++) {
            const params = datas[i]
            this.setRestaurants(params)
        }

        httpAPI.get("/get_info", async (query) => {
            return await this.get_info()
        });

        socket.registerMessage("addServer", this.addServer.bind(this));
        socket.registerMessage("setServer", this.setServer.bind(this));
        socket.registerMessage("getAllServer", this.getAllServer.bind(this));


        socket.registerMessage("g_set_menu", this.set_menu.bind(this));
        socket.registerMessage("g_get_menu", this.get_menu.bind(this));

        socket.registerMessage("g_get_config", this.get_config.bind(this));

        this.maxPort = await db.getValue("server_max_id", BASE_PORT);

        this.menu_data = {}

    }

    async setServer(params) {
        // console.log("setServer", params);

        await db.set(db.serverTable, params);

        socket.broadcast("set_server_"+params.id, params);

        redirectPage.updateStore(params)
        this.setRestaurants(params)
        
        return {
            result: true,
        }
    }

    async addServer(params) {

        const name = params.id;
        const param1 = this.maxPort;


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

                execFile(scriptPath, [param1, name, 'true'], {cwd: path.dirname(scriptPath)}, callback);

            } catch (e) {
                console.log(e)
            }

            params.url = `https://v.xiaoxiong.pt:${param1}`;
        }

        if (!params.permissionsControl) {
            params.permissionsControl = {
                order: true,
                delivery: true,
                reserver: true,
                vip: true,
                fandays: true,
            }
        }

        if (!params.customDishesControl) {
           params.customDishesControl = {
               1: {enabled: true, name: 'Sushi Aleatória®'},
               2: {enabled: true, name: 'Poke Bowl'},
               3: {enabled: true, name: 'MY BOX'},
               4: {enabled: true, name: 'bibimbap'},
               5: {enabled: true, name: 'XIAOXIONG® RAMEN'},
               6: {enabled: true, name: 'Menu Almoço'},
           }
        }

        console.log("params", params);
        await db.set(db.serverTable, params);

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
            const server = await db.get(db.serverTable,data.id)

            if(server){
                for(const key in data){
                    server[key] = data[key];
                }

                await db.set(db.serverTable, server);

                socket.restaurant_data = { id:data.id }
                result.data = "Change to Statu Online"

            }else{
                await this.addServer(data)
                result.data = "Create new Server"

            }

            state.setStatusOnline(data.id, true)

            result.permissionsControl = server.permissionsControl

            result.success = true
            return result

        }catch (e){
            result.data = e.message
            return result
        }

    }


    async get_info() {
        let reserve_count = await db.getValue("server_reserve_max_id", 1);
        let order_count = await db.getValue("server_order_max_id", 1);

        return {
            reserve_count,
            order_count
        }
    }

}


const serverManager =  new ServerManager();
module.exports = serverManager;