const db = require('../utils/db');
const state = require('../utils/state');
const socket = require('../utils/socket');
const { execFile } = require('child_process');
const path = require('path');
const fs = require('fs');
const redirectPage = require('./redirect_page')
const httpAPI = require("../utils/http_api");

class AlertMessageManager {

    static manager = 'manager'
    static client = 'client'

    static without_code = 'without-code'

    constructor() {

    }

    async init() {
        console.log("[Alert Message Manager] Init")

        socket.registerMessage("g_alert", this.alert.bind(this));
        socket.registerMessage("g_message", this.message.bind(this));

        socket.registerMessage('get_all_messages_alerts', this.get_all.bind(this))
        socket.registerMessage('delete_all_messages_alerts', this.delete_all.bind(this))
        socket.registerMessage('messages_alerts', this.messages_alerts.bind(this))

    }

    messages_alerts() {
        
    }

    alert(data, to, identity=AlertMessageManager.manager){
        const restaurant = data.restaurant;
        let alert = data.alert;

        console.log("[Alert Message Manager] Alert:", alert,", From:",restaurant);

        if(['401_1','401_2','401_3'].includes(alert.code)){
            alert = {...alert, identity: identity}
        }

        if(alert.identity){
            this.send_alert_to((to? to:restaurant),alert)
        }

        this.increment(restaurant, 'alert', alert)
    }

    message(data, to, identity=AlertMessageManager.manager){
        const restaurant = data.restaurant;
        let msg = data.msg;

        console.log("[Alert Message Manager] Message:", msg,", From:",restaurant);

        msg = {...msg, identity: identity};

        if(msg.identity){
            this.send_message_to((to? to:restaurant),msg);
        }

        this.increment(restaurant, 'message', msg)
    }

    send_alert_to(restaurant, alert){
        const destination = 'alert_' + restaurant
        socket.broadcast(destination, alert)
    }

    send_message_to(restaurant, msg){
        const destination = 'message_' + restaurant
        socket.broadcast(destination, msg)
    }

    async increment(restaurant, type, data){
        await this.save_to_db(restaurant, type, data, 1)
    }

    async decrement(restaurant, type, data){
        await this.save_to_db(restaurant, type, data, -1)
    }

    async save_to_db(restaurant, type, data, delta){
        let restaurantData = await this.get_restaurant_data({restaurant: restaurant})
        console.log("restaurantData:",restaurantData)
        const id = (data.code ? data.code : AlertMessageManager.without_code) + '-' + data.message
        console.log("id:", id)
        const find = restaurantData[type].find((i) =>{return i.id == id })
        console.log("find:", find)
        if(find){
            find.number = Math.max(find.number+delta, 0)
        }else{
            restaurantData[type] = [...restaurantData[type], { id: id , value: data, number: Math.max(delta, 0)}]
        }

        await db.set(db.alertMessageTable, restaurantData)
    }

    async get_restaurant_data(data){
        const restaurant = data.restaurant;
        const result = await db.get(db.alertMessageTable, restaurant)
        if(!result){
            return {
                id: restaurant,
                alert:[],
                message:[]
            }
        }
        return result
    }

    async get_all(){
        const result = await db.getAll(db.alertMessageTable)
        if(!result){
            return []
        }
        return result
    }

    async delete_all(){
        const all = await this.get_all()
        for(const data of all){
            await db.del(db.alertMessageTable, data.id)
        }
    }

}

const alertMessageManager =  new AlertMessageManager();
module.exports = alertMessageManager;