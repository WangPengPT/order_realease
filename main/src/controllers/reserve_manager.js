const db = require('../utils/db');
const socket = require('../utils/socket');

const httpAPI = require('../utils/http_api');
const serverManager = require('./server_manager')
const mailAPI = require("../utils/mail");
const {DBRef} = require("mongodb");


class ReserveManager {

    constructor() {

    }

    async init() {
        console.log("Initializing Reserve Manager");

        httpAPI.pos("/reserve_create", this.reserveCreate.bind(this))

        httpAPI.get("/reserve_confirm", async (query) => {
            let {reserveId} = query;
            return await this.reserveConfirm(reserveId)
        });

        httpAPI.get("/reserve_cancel", async (query) => {
            let {reserveId} = query;
            return await this.reserveCancel(reserveId)
        })

        httpAPI.get("/reserve_list", async (query) => {
            let {restaurant, count} = query;
            count = parseInt(count)
            console.log(restaurant, count)
            const data = await this.getByRestaurant(restaurant, count)

            return {
                result: true,
                data: data
            }
        })

        socket.registerMessage("reserve_change_state", async (query) => {
            return await this.changePayState(query)
        });

        socket.registerMessage("getReserveMonthList", async (query) => {

            console.log("getReserveMonthList:" + query)
            const data = await this.getReserveMonthList(query.year, query.month)

            return {
                result: true,
                data: data
            }
        })

        socket.registerMessage("getAllreserve", async (query) => {
            let count = query.count;
            count = parseInt(count)
            console.log(count)
            const data = await this.getAllreserve(count)

            return {
                result: true,
                data: data
            }
        })

        socket.registerMessage("getAllreservecancels", async (query) => {
            let count = query.count;
            count = parseInt(count)
            console.log(count)
            const data = await this.getAllreservecancels(count)

            return {
                result: true,
                data: data
            }
        })

        socket.registerMessage("g_update_reserve_data", this.update_reserve_data.bind(this))

        socket.registerMessage("setReserve", this.update_reserve_data.bind(this))

        this.max_id = await db.getValue("server_reserve_max_id", 1);

        console.log()
    }

    async reserveUpdated(data) {
        await db.set(db.reserveTable, data)
        console.log(data)
        this.broadcast(data)
    }

    generateUniqueId() {
        const timestamp = Date.now().toString(36);

        const randomPart = Math.random().toString(36).substring(2, 9);
        return `${timestamp}_${randomPart}`;
    }

    async reserveCreate(org_data) {

        const maxId = this.max_id;

        const timeId = this.generateUniqueId();

        org_data.id = `${timeId}`;
        org_data.customerName = org_data.name;
        org_data.name = `R${maxId}`;
        org_data.status = 'new';

        this.max_id = this.max_id + 1;
        await db.setValue("server_reserve_max_id", this.max_id);

        const data = this.toData(org_data)

        const customerDate = data.date;
        const customerTime = data.time

        const customerName = data.customerName
        const customerMail = data.email
        const customerPhone = data.phone
        const customerNote = data.note

        const reserveId = data.name
        const reserveTime = customerDate + " " +  customerTime
        const reserveNumberPeople = data.numberPeople

        const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>reserve Confirmation</title>
            <style>
                .confirm-btn {
                    display: inline-block;
                    padding: 10px 20px;
                    background-color: #44ff44;
                    color: white;
                    text-decoration: none;
                    breserve-radius: 4px;
                    font-family: Arial, sans-serif;
                }
                
                .cancel-btn {
                    display: inline-block;
                    padding: 10px 20px;
                    background-color: #ff4444;
                    color: white;
                    text-decoration: none;
                    breserve-radius: 4px;
                    font-family: Arial, sans-serif;
                }
            </style>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <p>Dear <strong>${customerName}</strong>, your reserve is confirmed!</p>
            
            <div style="margin: 15px 0; padding-left: 10px; breserve-left: 3px solid #ff6b6b;">
                <p><strong>reserve id:</strong> ${reserveId}</p>
                <p><strong>Reserve Time:</strong> ${reserveTime}</p>
                <p><strong>Number People:</strong> ${reserveNumberPeople}</p>
                <p><strong>Reserve Phone:</strong> ${customerPhone}</p>
                <p><strong>Reserve Note:</strong> ${customerNote}</p>
            </div>
        
            <a href="http://localhost/confirm-reserve.html?id=${timeId}&name=${reserveId}" class="confirm-btn">confirm reserve</a>
            <a href="http://localhost/cancel-reserve.html?id=${timeId}&name=${reserveId}" class="cancel-btn">cancel reserve</a>
<!--            <a href="https://v.xiaoxiong.pt/cancel-reserve.html?id=${timeId}" class="cancel-btn">cancel reserve</a>-->
    
            <p>Thank you for choosing us!</p>
            <p style="color: #666; font-size: 0.9em;">© 2025 Your Restaurant Name</p>
        </body>       
        </html>
        `;

        await mailAPI.send(customerMail, "new reserve", html );
        await this.reserveUpdated(org_data)

        return {
            result: true,
            data: org_data
        }
    }


    getMinutesDiff(date1, date2) {
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());
        return Math.floor(timeDiff / (1000 * 60));
    }

    async reserveCancel(id) {
        const reserve = await db.get(db.reserveTable, id)
        if (reserve) {

            let timestamp = reserve.date + " " + reserve.time
            let dateObject = new Date(timestamp);

            const diffMinutes = this.getMinutesDiff(dateObject,Date.now());
            console.log(diffMinutes)

            const cancelLimitTime = 30 // min

            if (diffMinutes >= cancelLimitTime)  {
                reserve.status = "voided"
                reserve.financial_status = "voided"
                await this.reserveUpdated(reserve)
                return {
                    result: true
                }
            }
            else {
                return {
                    result: false,
                    error: "You can't cancel reserve in " + cancelLimitTime + " minutes."
                }
            }
        }

        return {
            result: false,
            error: "Invalid reserve id."
        }

    }

    async reserveConfirm(id){
        const reserve = await db.get(db.reserveTable, id)
        if(reserve) {
            reserve.status = "confirmed"

            await  this.reserveUpdated(reserve)
            return {
                result: true,
            }
        }

        return {
            result: false,
            error: "Invalid reserve id."
        }
    }

    broadcast(data) {
        console.log("broadcast",this.toData(data))
        socket.broadcast("reserve_" + data.restaurant,this.toData(data))
    }

    async getByRestaurant(restaurant,count) {
        const q = {
            restaurant: restaurant
        }

        const sort = {
            date: -1,
        }

        const datas = await db.find(db.reserveTable, q, sort, count)

        const ret = []
        for (let i = 0; i < datas.length; i++) {
            ret.push(this.toData(datas[i]));
        }

        return ret
    }

    async getAllreserve(count) {

        const sort = {
            date: -1,
        }

        const datas = await db.find(db.reserveTable, {}, sort, count)

        const ret = []
        for (let i = 0; i < datas.length; i++) {
            ret.push(this.toData(datas[i]));
        }

        return ret
    }

    async getAllreservecancels(count) {
        const sort = {
            date: -1,
        }

        const q = {status:'processing'}

        const datas = await db.find(db.reserveTable, q, sort, count)

        const ret = []
        for(let i=0; i<datas.length; i++) {
            ret.push(this.toData(datas[i]));
        }
        console.log("ret",ret)

        return ret
    }

    async update_reserve_data(value){
        try{

            if(!value) throw new Error("Reserve data is empty")
            const reserve = await db.get(db.reserveTable,value.id)

            if(!reserve) {
                throw new Error("Reserve data is not found")
            }else{
                await db.set(db.reserveTable, value)
            }

            return {success:true, data:value}

        }catch (e) {
            return {success:false, data: e.message}
        }
    }

    async changePayState(data) {
        const dbData = await db.get(db.reserveTable, data.id)
        if (dbData) {
            dbData.state = data.value
            await db.set(db.reserveTable, dbData);
            return {success: true, data: data};
        }

        return {}
    }

    async getReserveMonthList(year, month) {

        const sort = {
            _id: -1,
        }

        month = String(month).padStart(2, '0');

        const q = {
            "date": { "$regex": `^${year}-${month}` }
        }

        const datas = await db.find(db.reserveTable, q, sort)

        const ret = []
        for (let i = 0; i < datas.length; i++) {
            ret.push(this.toData(datas[i]));
        }

        return ret
    }

    toData(data) {
        let ret = data
        return ret;
    }
}

const reserveManager =  new ReserveManager();
module.exports = reserveManager;