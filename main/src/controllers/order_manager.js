const db = require('../utils/db');
const socket = require('../utils/socket');

const httpAPI = require('../utils/http_api');
const serverManager = require('./server_manager')
const mailAPI = require("../utils/mail");


class OrderManager {



    constructor() {

    }

    async init() {

        httpAPI.pos("/order_create", this.orderCreate.bind(this))

        httpAPI.pos("/order_cancelled", this.orderCancelled.bind(this))

        httpAPI.pos("/order_updated", this.orderUpdated.bind(this))

        httpAPI.pos("/order_paid", this.orderPaid.bind(this))

        httpAPI.pos("/xx_order_create", this.xxOrderCreate.bind(this))

        httpAPI.get("/xx_order_cancel", async (query) => {
            let {orderId} = query;
            return await this.xxOrderCancel(orderId)
        });

        httpAPI.get("/order_list", async (query) => {
            let {restaurant, count} = query;
            count = parseInt(count)
            console.log(restaurant, count)
            const data = await this.getByRestaurant(restaurant, count)

            return {
                result: true,
                data: data
            }
        })

        socket.registerMessage("getAllOrder", async (query) => {
            let count = query.count;
            count = parseInt(count)
            console.log(count)
            const data = await this.getAllOrder(count)

            return {
                result: true,
                data: data
            }
        })

        this.max_id = await db.getValue("server_order_max_id", 1);
    }


    async orderCreate(data) {
        data.state = "create"
        await this.orderUpdated(data)
    }

    async orderCancelled(data) {
        data.state = "cancelled"
        await this.orderUpdated(data)
    }

    async orderUpdated(data) {
        data.restaurant = this.get_restaurant(data)
        data.pickup_date = this.get_pickup_date(data)
        await db.set(db.orderTable, data)

        console.log(data)

        this.broadcast(data)
    }


    generateUniqueId() {
        const timestamp = Date.now().toString(36);

        const randomPart = Math.random().toString(36).substring(2, 9);
        return `${timestamp}_${randomPart}`;
    }

    async xxOrderCreate(org_data) {

        const maxId = this.max_id;

        const timeId = this.generateUniqueId();

        org_data.id = `${timeId}`;
        org_data.name = `T${maxId}`;

        this.max_id = this.max_id + 1;
        await db.setValue("server_order_max_id", this.max_id);

        const data = this.toData(org_data)

        const orderName = data.name
        const orderId = data.id;
        const customer_info = data.customer

        const customerName = customer_info.name
        const mail = customer_info.email

        const orderTime = data.pickupDate + " " +  data.pickupTime
        const pickupLocation = data.pickupLocation
        const totalPrice = data.total_price;

        let lines = "";

        for (let i = 0; i < data.line_items.length; i++) {
            const value = data.line_items[i]
            lines += `<li>${value.name}  ${value.price} x ${value.quantity}</li>`;
        }

        const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Order Confirmation</title>
            <style>
                .cancel-btn {
                    display: inline-block;
                    padding: 10px 20px;
                    background-color: #ff4444;
                    color: white;
                    text-decoration: none;
                    border-radius: 4px;
                    font-family: Arial, sans-serif;
                }
            </style>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <p>Dear <strong>${customerName}</strong>, your order is confirmed!</p>
            
            <div style="margin: 15px 0; padding-left: 10px; border-left: 3px solid #ff6b6b;">
                <p><strong>order id:</strong> ${orderName}</p>
                <p><strong>Pickup Time:</strong> ${orderTime}</p>
                <p><strong>Pickup Location:</strong> ${pickupLocation}</p>
                
                <h4>Order Details:</h4>
                <ul style="margin-top: 5px; padding-left: 20px;">
                    ${lines}
                </ul>                
                <p><strong>Total:</strong> ${totalPrice}</p>
            </div>
        
            <a href="https://v.xiaoxiong.pt/cancel-order.html?id=${orderId}" class="cancel-btn">cancel order</a>
    
            <p>Thank you for choosing us!</p>
            <p style="color: #666; font-size: 0.9em;">© 2025 Your Restaurant Name</p>
        </body>       
        </html>
        `;

        await mailAPI.send(mail, "new order", html );
        await this.orderUpdated(org_data)

        return {
            result: true,
            data: org_data
        }
    }


    getMinutesDiff(date1, date2) {
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());
        return Math.floor(timeDiff / (1000 * 60));
    }

    async xxOrderCancel(id) {
        const order = await db.get(db.orderTable, id)
        if (order) {

            const data = this.toData(order)

            let timestamp = data.pickupDate + " " + data.pickupTime
            let dateObject = new Date(timestamp);

            const diffMinutes = this.getMinutesDiff(dateObject,Date.now());
            console.log(diffMinutes)

            if (diffMinutes >= 15)  {
                order.financial_status = "voided"
                await this.orderUpdated(order)
                return {
                    result: true
                }
            }
            else {
                return {
                    result: false,
                    error: "You can't cancel order in 15 minutes."
                }
            }
        }

        return {
            result: false,
            error: "Invalid order id."
        }

    }

    broadcast(data) {
        socket.broadcast(data.restaurant,this.toData(data))
    }

    async orderPaid(data) {
        data.state = "paid"
        await this.orderUpdated(data)
    }

    async getByRestaurant(restaurant,count) {
        const q = {
            restaurant: restaurant
        }

        const sort = {
            pickup_date: -1,
        }

        const datas = await db.find(db.orderTable, q, sort, count)

        const ret = []
        for (let i = 0; i < datas.length; i++) {
            ret.push(this.toData(datas[i]));
        }

        return ret
    }

    async getAllOrder(count) {

        const sort = {
            pickup_date: -1,
        }

        const datas = await db.find(db.orderTable, {}, sort, count)

        const ret = []
        for (let i = 0; i < datas.length; i++) {
            ret.push(this.toData(datas[i]));
        }

        return ret
    }

    toData(data) {
        let ret = {}

        ret.id = data.id


        ret.name = data.name
        ret.created_at = data.created_at
        ret.customer = data.customer ? data.customer : this.get_customer_info(data)
        ret.total_price = data.total_price
        ret.pay_state = data.pay_state ? data.pay_state : this.get_pay_state(data)
        ret.tags = data.tags
        ret.note = data.note
        ret.pay_type =  data.pay_type ? data.pay_type : this.get_pay_type(data)


        const attributes = this.get_note_attributes(data)

        ret.pickupDate = data.pickupDate ? data.pickupDate : attributes["Pickup-Date"]
        ret.pickupTime = data.pickupTime ? data.pickupTime : attributes["Pickup-Time"]
        ret.pickupLocation = data.pickupLocation ? data.pickupLocation : attributes["Pickup-Location-Company"]

        ret.line_items = data.line_items ? data.line_items : this.get_line_items(data)

        ret.payment_gateway_names = data.payment_gateway_names
        //ret.financial_status = data.financial_status

        return ret;
    }

    get_customer_info(data) {
        const name = data.billing_address.name
        const phone = data.billing_address.phone
        const email = data.email ? data.email : data.billing_address.email

        return {
            name,
            phone,
            email
        }
    }

    get_pay_state(data) {
        return data.financial_status;
    }

    get_pay_type(data) {
        if (data.payment_gateway_names && data.payment_gateway_names.length > 0) {
            return data.payment_gateway_names[0]
        }
        else {
            return "";
        }
    }

    get_note_attributes(data) {
        let ret = {}
        if (data.note_attributes) {
            for (let i = 0; i < data.note_attributes.length; i++) {
                const value = data.note_attributes[i]
                if (value.name.startsWith("_")) continue;

                ret[value.name] = value.value
            }
        }

        return ret;
    }

    get_restaurant(data) {

        if (!data.note_attributes) {
            return data.restaurant
        }
        let ret= ""

        for (let i = 0; i < data.note_attributes.length; i++) {
            const value = data.note_attributes[i]
            if (value.name == "Pickup-Location-Company") {
                ret = value.value;
            }
        }

        if  ( serverManager.restaurants[ret] ) {
            ret = serverManager.restaurants[ret];
        }

        return ret;
    }

    get_pickup_date(data) {

        if (!data.note_attributes) {
            return data.pickupDate
        }

        let ret= ""
        for (let i = 0; i < data.note_attributes.length; i++) {
            const value = data.note_attributes[i]
            if (value.name == "Pickup-Date") {
                ret = value.value;
            }
        }
        return ret;
    }

    get_line_items(data) {
        let ret = []
        for (let i = 0; i < data.line_items.length; i++) {
            const value = data.line_items[i]


            const properties = []
            if (value.properties) {
                for (let i = 0; i < value.properties.length; i++) {
                    const propertie = value.properties[i]

                    if (typeof(propertie) == 'string') {
                        properties.push(propertie);
                        continue;
                    }

                    if (propertie.name.startsWith("_")) continue;
                    properties.push(propertie.name + ": "  + propertie.value);
                }
            }

            ret.push({
                sku: value.sku,
                name: value.name,
                quantity: value.quantity,
                price: value.price,
                properties: properties,
            })
        }
        return ret;
    }
}

const orderManager =  new OrderManager();
module.exports = orderManager;