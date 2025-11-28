const { request } = require('undici');
const db = require('../utils/db');

const httpAPI = require("../utils/http_api");

const ST_pending = "pending";
const ST_success = "paid";
const ST_rejected = "rejected";
const ST_expired = "expired";
const ST_declined = "declined";



class MBWayPayment {

  constructor() {
    this.key = "BDN-794528"
  }

  async newPayment(orderId, price, info) {

      if (typeof(price) == 'number') {
          price = price.toFixed(2)
      }

    const bodyData = JSON.stringify({
      mbWayKey: this.key,
      orderId: orderId,
      amount: price,
      mobileNumber: info.phone,
      email: info.email,
      description: info.description
    });

    //console.log(bodyData);

    const {statusCode, body} = await request('https://api.ifthenpay.com/spg/payment/mbway', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: bodyData
    })

    //console.log(statusCode, body)
    if ( statusCode == 200) {
      const ret = await body.json();
      //console.log(ret)
      if (ret.Status == "000")
      {
        return {
          id: orderId,
          requestId: ret.RequestId,
          status: ST_pending,

          amount: price,
          mobileNumber: info.phone,
          email: info.email,
          description: info.description
        };
      }
      else {
        return {
          error: info.Message
        }
      }
    }

    return {
      error: "error, code: " + statusCode
    }
  }

  async checkPaymentStatus(RequestId) {

    const head = "https://api.ifthenpay.com/spg/payment/mbway/status?";
    const key = this.key;
    const requestId = RequestId;

    const cmd = `${head}mbWayKey=${key}&requestId=${requestId}`

    const { statusCode, body } = await request(cmd)

    if ( statusCode == 200) {
      const info = await body.json();
      console.log(info)

      let status = ST_pending;

      if (info.Status == "000") {
        status = ST_success;
      }

      if (info.Status == "020") {
        status = ST_rejected;
      }

      if (info.Status == "101") {
        status = ST_expired;
      }

      if (info.Status == "122") {
        status = ST_declined;
      }

      return {
        status: status,
      };
    }

    return {
      error: "error, code: " + statusCode
    }
  }
}

class PayService {

  init(orderManager) {

    this.orderManager = orderManager

    this.payments = {}
    this.payments["mbway"] = new MBWayPayment()



    httpAPI.pos("/mbwaypay", async (query) => {
      let requestId = query.requestId;
      let orderId = query.orderId;

      const ret = await this.checkPaymentStatus("mbway", requestId);

      console.log(ret, query, orderId, requestId)

      if (!ret.error)
      {
        ret.id = orderId;
        await this.changePayState(ret);
      }

      return {
        success: true
      }
    });

    httpAPI.get("/mbwaypay", async (query) => {
      let {orderId,requestId} = query;


      const ret = await this.checkPaymentStatus("mbway", requestId);

      console.log(ret, query, orderId, requestId)

      if (!ret.error)
      {
        ret.id = orderId;
        await this.changePayState(ret);
      }

      return {
        success: true
      }
    });

    this.updateCheckStateData = []
    this.updateCheckState()
  }



  async updateCheckState() {

    const datas = [...this.updateCheckStateData]

    for (const key in datas) {
      const data = datas[key]

      console.log("check state ... ", data)
      const info = await this.checkState(data)

      if (info.status != ST_pending) {
        let index = this.updateCheckStateData.indexOf(data);
        if (index !== -1) {
          this.updateCheckStateData.splice(index, 1);
        }

        const ret = {
          id: data,
          status: info.status,
        };
        await this.changePayState(ret);
      }
    }

    setTimeout(() => {
      this.updateCheckState();
    }, 30000)
  }

  async newPayment(orderId, type, price, info) {

    const ret = await this.checkState(orderId)
    if (!ret.error) {
      return ret;
    }

    const fun = this.payments[type]

    if (fun) {
      const ret = await fun.newPayment(orderId, price, info)

      if (!ret.error)
      {
        this.updateCheckStateData.push(orderId)

        ret.type = type;
        return await this.writePayment(ret)
      }
      return ret;
    }

    return {
      error: "not found payment type."
    }
  }

  async checkState(orderId) {
    const info = await this.loadPayment(orderId)
    //console.log(info);
    if (info && info.id == orderId) {

      if (info.status != ST_pending) {
        return info;
      }

      var ret = await this.checkPaymentStatus(info.type,info.requestId);

      //console.log(ret);

      if (!ret.error) {
        info.status = ret.status
        if (info.status != ST_pending) {
          await this.writePayment(info);
        }
        return info;
      }
      return ret;
    }

    return {
      error: "not found payment."
    }
  }

  async writePayment(info) {
    await db.set("payment", info)
  }

  async loadPayment(orderId) {
    return await db.get("payment", orderId)
  }

  async checkPaymentStatus(type,requestId) {

    const fun = this.payments[type]

    if (fun) {
      const ret = await fun.checkPaymentStatus(requestId)

      if (!ret.error)
      {
         await this.writePayment(ret)
      }
      return ret;
    }

    return {
      error: "not found payment type."
    }
  }

  async changePayState(value) {
    const orgData = await this.loadPayment(value.id)

    if (orgData) {
      const data = {...orgData, ...value}

      await this.orderManager.updatePayState(orgData.id,orgData.status)
      await this.writePayment(data);
    }
  }
}

const payService = new PayService()
module.exports = payService;