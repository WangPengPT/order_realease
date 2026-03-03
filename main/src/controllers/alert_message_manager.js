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

    constructor() {

    }

    async init() {
        console.log("Alert Message Manager Init")

        socket.registerMessage("g_alert", this.alert.bind(this));
        socket.registerMessage("g_message", this.message.bind(this));

    }

    alert(data){


        const restaurant = data.restaurant;
        let alert = data.alert;

        console.log("restaurant", restaurant);
        console.log("alert", alert);

        if(['401_1','401_2','401_3'].includes(alert.code)){
            alert = {...alert, identity: AlertMessageManager.manager}
        }

        if(alert.identity){
            this.send_alert_to(restaurant,alert)
        }
    }

    message(data){
        const restaurant = data.restaurant;
        let msg = data.msg;

        console.log("restaurant", restaurant);
        console.log("msg", msg);

        if(msg.identity){
            this.send_message_to(restaurant,msg);
        }
    }

    send_alert_to(restaurant, alert){
        const destination = 'alert_' + restaurant
        socket.broadcast(destination, alert)
    }

    send_message_to(restaurant, msg){
        const destination = 'message_' + restaurant
        socket.broadcast(destination, msg)
    }

}

const alertMessageManager =  new AlertMessageManager();
module.exports = alertMessageManager;