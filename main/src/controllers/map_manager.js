const db = require('../utils/db');
const httpAPI = require('../utils/http_api');
const socket = require('../utils/socket');
const mailAPI = require("../utils/mail");

class MapManager {
    constructor() {
    }

    init() {
        console.log("MAP MANAGER INIT")
        httpAPI.pos("/restaurant_add", this.addRestaurant.bind(this));
        httpAPI.pos("/restaurant_update", this.updatadeRestaurant.bind(this));
        httpAPI.get("/restaurant_list", async () => {
            const data = await db.getAll(db.restaurantTable);
            return {result: true, data};
        })

        httpAPI.pos("/restaurant_send_email", this.sendEmail.bind(this))

        httpAPI.get("/server_list", async () => {
            const data = await db.getAll(db.serverTable);
            return {result: true, data};
        })

        socket.registerMessage("getAllRestaurants", this.getAllRestaurants);
        socket.registerMessage("addRestaurant", this.addRestaurant);
        socket.registerMessage("setRestaurant", this.setRestaurant);
    }

    async setRestaurant(params) {
        if (!params || !params.id) {
            return {result: false, message: "Invalid restaurant data"};
        }

        const existing = await db.get(db.restaurantTable, params.id);

        if (existing) {
            // Update the existing restaurant
            const updated = {...existing, ...params};
            await db.set(db.restaurantTable, updated);
            return {result: true, message: "Restaurant updated"};
        } else {
            // Add new restaurant
            await db.set(db.restaurantTable, params);
            return {result: true, message: "Restaurant added"};
        }
    }

    async addRestaurant(params) {
        const exists = await db.get(db.restaurantTable, params.name);
        // Checks if the restaurant exists
        if (exists) {
            return {
                result: false,
                message: "Restaurant already exists"
            }
        }
        // If new Restaurant add to DB
        const restaurant = {
            ...params
        };
        await db.set(db.restaurantTable, restaurant);
        return {result: true}
    }

    async updatadeRestaurant(params) {
        const existing = await db.get(db.restaurantTable, params.id)
        if (!existing) {
            return {result: false, message: "Restaurant does not exist"}
        } else {
            const updated = {...existing, ...params}
            await db.set(db.restaurantTable, updated);
            return {result: true}
        }
    }

    async getAllRestaurants() {
        const data = await db.getAll(db.restaurantTable);
        return {
            result: true,
            datas: data,
        }
    }

    async sendEmail(emailData) {
        try {
            // emailData 就是您的前端 POST 请求体中的数据
            const content = emailData.data;

            // 在这里执行邮件发送逻辑...
            await mailAPI.send('comercial@xiaoxiong.pt', "New Join Request", content);

            return {
                result: true,
                message: "Email sent successfully."
            };
        } catch (error) {
            return {
                result: false,
                message: error.message
            };
        }
    }
}

const mapManager = new MapManager();
module.exports = mapManager;
