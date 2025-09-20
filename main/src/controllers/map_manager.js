const db = require('../utils/db');
const httpAPI = require('../utils/http_api');
const socket = require('../utils/socket');

class MapManager {
    constructor() {}

    init() {
        console.log("MAP MANAGER INIT")
        httpAPI.pos("/restaurant_add", this.addRestaurant.bind(this));
        httpAPI.pos("/restaurant_update", this.updatadeRestaurant.bind(this));
        httpAPI.get("/restaurant_list", async () => {
            const data = await db.getAll(db.restaurantTable);
            return { result: true, data };
        })

        socket.registerMessage("getAllRestaurants", this.getAllRestaurants);
        socket.registerMessage("addRestaurant", this.addRestaurant);
    }

    async addRestaurant(params) {
        const exists = await db.get(db.restaurantTable, params.name);
        console.log("mapManager.js: asdadasdasdasd",params.name)
        // Checks if the restaurant exists
        if(exists) {
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
        return { result: true }
    }

    async updatadeRestaurant(params){
        const existing = await db.get(db.restaurantTable, params.id)
        if(!existing){
            return { result: false, message: "Restaurant does not exist" }
        } else {
            const updated = { ...existing, ...params }
            await db.set(db.restaurantTable, updated);
            return { result: true } 
        }
    }

        async getAllRestaurants() {
        const data = await db.getAll(db.restaurantTable);
        return {
            result: true,
            datas: data,
        }
    }
}

const mapManager = new MapManager();
module.exports = mapManager;
