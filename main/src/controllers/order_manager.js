const db = require('../utils/db');
const socket = require('../utils/socket');

const httpAPI = require('../utils/http_api');

class OrderManager {

    constructor() {

    }

    init() {
        httpAPI.pos("/order_create", this.orderCreate.bind(this))

        httpAPI.pos("/order_cancelled", this.orderCancelled.bind(this))

        httpAPI.pos("/order_updated", this.orderUpdated.bind(this))

        httpAPI.pos("/order_paid",  this.orderPaid.bind(this))
    }

    async orderCreate(data) {
        data.state = "create"
        await db.set("orderCreate", data)
    }

    async orderCancelled(data) {
        data.state = "cancelled"
        await db.set("order", data)
    }

    async orderUpdated(data) {
        await db.set("order", data)
    }

    async orderPaid(data) {
        data.state = "paid"
        await db.set("order", data)
    }
}

const orderManager =  new OrderManager();
module.exports = orderManager;