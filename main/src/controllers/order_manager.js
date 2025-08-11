const db = require('../utils/db');
const socket = require('../utils/socket');

const httpAPI = require('../utils/http_api');
const serverManager = require('./server_manager')


class OrderManager {



    constructor() {

    }

    init() {

        httpAPI.pos("/order_create", this.orderCreate.bind(this))

        httpAPI.pos("/order_cancelled", this.orderCancelled.bind(this))

        httpAPI.pos("/order_updated", this.orderUpdated.bind(this))

        httpAPI.pos("/order_paid",  this.orderPaid.bind(this))



        httpAPI.get("/order_list",  async (query) => {
            let {restaurant, count} = query;
            count = parseInt(count)
            console.log(restaurant,count)
            const data = await this.getByRestaurant(restaurant, count)

            return {
                result: true,
                data: data
            }
        })

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
        await db.set("order", data)

        this.broadcast(data)
    }

    broadcast(data) {
        socket.broadcast(data.restaurant,toData(data))
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
            pickup_date: 1,
        }

        const datas = await db.find("order", q, sort, count)

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
        ret.customer = this.get_customer_info(data)
        ret.total_price = data.total_price
        ret.pay_state = this.get_pay_state(data)
        ret.tags = data.tags
        ret.note = data.note
        ret.pay_type = this.get_pay_type(data)


        const attributes = this.get_note_attributes(data)

        ret.pickupDate = attributes["Pickup-Date"]
        ret.pickupTime = attributes["Pickup-Time"]
        ret.pickStore = attributes["Pickup-Location-Company"]

        ret.line_items = this.get_line_items(data)

        ret.payment_gateway_names = data.payment_gateway_names
        //ret.financial_status = data.financial_status

        return ret;
    }

    get_customer_info(data) {
        const name = data.billing_address.name
        const phone = data.billing_address.phone
        const email = data.email

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
        return data.payment_gateway_names[0]
    }

    get_note_attributes(data) {
        let ret = {}
        for (let i = 0; i < data.note_attributes.length; i++) {
            const value = data.note_attributes[i]
            if (value.name.startsWith("_")) continue;

            ret[value.name] = value.value
        }
        return ret;
    }

    get_restaurant(data) {
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
            for (let i = 0; i < value.properties.length; i++) {
                const propertie = value.properties[i]
                if (propertie.name.startsWith("_")) continue;

                properties.push(propertie.name + ": "  + propertie.value);
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