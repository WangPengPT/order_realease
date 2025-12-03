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
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Confirmar Reserva</title>
  </head>
  <body
    style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;"
  >
    <table
      role="presentation"
      cellspacing="0"
      cellpadding="0"
      border="0"
      width="100%"
      style="max-width: 420px; margin: 0 auto; background-color: #ffffff;"
    >
      <!-- Header Section -->
      <tr>
        <td
          style="padding: 40px 24px 24px 24px; text-align: center; background: linear-gradient(135deg, rgba(0, 0, 0, 0.03) 0%, rgba(0, 0, 0, 0.01) 100%);"
        >
          <!-- Calendar Icon -->
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: 0 auto 16px auto;">
            <tr>
              <td
                style="width: 64px; height: 64px; background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%); border-radius: 16px; text-align: center; vertical-align: middle;"
              >
                <span style="font-size: 28px;">📅</span>
              </td>
            </tr>
          </table>
          <h1 style="margin: 0 0 8px 0; font-size: 24px; font-weight: 700; color: #1a1a1a;">Confirmar Reserva</h1>
          <p style="margin: 0; font-size: 14px; color: #6b7280;">Verifique seus dados antes de confirmar</p>
        </td>
      </tr>

      <!-- Details Section -->
      <tr>
        <td style="padding: 0;">
          <table
            role="presentation"
            cellspacing="0"
            cellpadding="0"
            border="0"
            width="100%"
            style="border-collapse: collapse;"
          >
            <!-- Reserve ID -->
            <tr>
              <td style="padding: 20px 24px; border-bottom: 1px solid #e5e5e5;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                  <tr>
                    <td style="width: 48px; vertical-align: middle;">
                      <div
                        style="width: 48px; height: 48px; background-color: #f5f5f5; border-radius: 12px; text-align: center; line-height: 48px;"
                      >
                        <span style="font-size: 20px;">🎫</span>
                      </div>
                    </td>
                    <td style="padding-left: 16px; vertical-align: middle;">
                      <span
                        style="font-size: 12px; font-weight: 500; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.5px;"
                        >Reserve ID</span
                      >
                    </td>
                    <td style="text-align: right; vertical-align: middle;">
                      <span style="font-size: 16px; font-weight: 700; color: #1a1a1a;">${org_data.name}</span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Data -->
            <tr>
              <td style="padding: 20px 24px; border-bottom: 1px solid #e5e5e5;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                  <tr>
                    <td style="width: 48px; vertical-align: middle;">
                      <div
                        style="width: 48px; height: 48px; background-color: #f5f5f5; border-radius: 12px; text-align: center; line-height: 48px;"
                      >
                        <span style="font-size: 20px;">📅</span>
                      </div>
                    </td>
                    <td style="padding-left: 16px; vertical-align: middle;">
                      <span
                        style="font-size: 12px; font-weight: 500; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.5px;"
                        >Data</span
                      >
                    </td>
                    <td style="text-align: right; vertical-align: middle;">
                      <span style="font-size: 16px; font-weight: 700; color: #1a1a1a;">${customerDate}</span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Hora -->
            <tr>
              <td style="padding: 20px 24px; border-bottom: 1px solid #e5e5e5;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                  <tr>
                    <td style="width: 48px; vertical-align: middle;">
                      <div
                        style="width: 48px; height: 48px; background-color: #f5f5f5; border-radius: 12px; text-align: center; line-height: 48px;"
                      >
                        <span style="font-size: 20px;">🕐</span>
                      </div>
                    </td>
                    <td style="padding-left: 16px; vertical-align: middle;">
                      <span
                        style="font-size: 12px; font-weight: 500; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.5px;"
                        >Hora</span
                      >
                    </td>
                    <td style="text-align: right; vertical-align: middle;">
                      <span style="font-size: 16px; font-weight: 700; color: #1a1a1a;">${customerTime}</span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Nome -->
            <tr>
              <td style="padding: 20px 24px; border-bottom: 1px solid #e5e5e5;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                  <tr>
                    <td style="width: 48px; vertical-align: middle;">
                      <div
                        style="width: 48px; height: 48px; background-color: #f5f5f5; border-radius: 12px; text-align: center; line-height: 48px;"
                      >
                        <span style="font-size: 20px;">👤</span>
                      </div>
                    </td>
                    <td style="padding-left: 16px; vertical-align: middle;">
                      <span
                        style="font-size: 12px; font-weight: 500; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.5px;"
                        >Nome</span
                      >
                    </td>
                    <td style="text-align: right; vertical-align: middle;">
                      <span style="font-size: 16px; font-weight: 700; color: #1a1a1a;">${customerName}</span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Número Telefone -->
            <tr>
              <td style="padding: 20px 24px; border-bottom: 1px solid #e5e5e5;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                  <tr>
                    <td style="width: 48px; vertical-align: middle;">
                      <div
                        style="width: 48px; height: 48px; background-color: #f5f5f5; border-radius: 12px; text-align: center; line-height: 48px;"
                      >
                        <span style="font-size: 20px;">📞</span>
                      </div>
                    </td>
                    <td style="padding-left: 16px; vertical-align: middle;">
                      <span
                        style="font-size: 12px; font-weight: 500; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.5px;"
                        >Número Telefone</span
                      >
                    </td>
                    <td style="text-align: right; vertical-align: middle;">
                      <span style="font-size: 16px; font-weight: 700; color: #1a1a1a;">${customerPhone}</span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Número de Pessoas -->
            <tr>
              <td style="padding: 20px 24px; border-bottom: 1px solid #e5e5e5;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                  <tr>
                    <td style="width: 48px; vertical-align: middle;">
                      <div
                        style="width: 48px; height: 48px; background-color: #f5f5f5; border-radius: 12px; text-align: center; line-height: 48px;"
                      >
                        <span style="font-size: 20px;">👥</span>
                      </div>
                    </td>
                    <td style="padding-left: 16px; vertical-align: middle;">
                      <span
                        style="font-size: 12px; font-weight: 500; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.5px;"
                        >Número de Pessoas</span
                      >
                    </td>
                    <td style="text-align: right; vertical-align: middle;">
                      <span style="font-size: 16px; font-weight: 700; color: #1a1a1a;">${reserveNumberPeople}</span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Nota (if exists) -->
            <tr>
              <td style="padding: 20px 24px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                  <tr>
                    <td style="width: 48px; vertical-align: middle;">
                      <div
                        style="width: 48px; height: 48px; background-color: #f5f5f5; border-radius: 12px; text-align: center; line-height: 48px;"
                      >
                        <span style="font-size: 20px;">📝</span>
                      </div>
                    </td>
                    <td style="padding-left: 16px; vertical-align: middle;">
                      <span
                        style="font-size: 12px; font-weight: 500; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.5px;"
                        >Nota</span
                      >
                    </td>
                    <td style="text-align: right; vertical-align: middle;">
                      <span style="font-size: 16px; font-weight: 700; color: #1a1a1a;">${customerNote}</span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Buttons Section -->
      <tr>
        <td style="padding: 24px;">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
            <tr>
              <td style="width: 48%; padding-right: 8px;">
                <a
                  href="http://localhost/cancel-reserve.html?id=${timeId}&name=${reserveId}"
                  style="display: block; padding: 16px 24px; background-color: #ffffff; border: 2px solid #e5e5e5; border-radius: 12px; text-align: center; text-decoration: none; font-size: 14px; font-weight: 600; color: #333333;"
                >
                  CANCEL
                </a>
              </td>
              <td style="width: 48%; padding-left: 8px;">
                <a
                  href="http://localhost/confirm-reserve.html?id=${timeId}&name=${reserveId}"
                  style="display: block; padding: 16px 24px; background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%); border-radius: 12px; text-align: center; text-decoration: none; font-size: 14px; font-weight: 600; color: #ffffff;"
                >
                  CONFIRM
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="padding: 24px; text-align: center; background-color: #fafafa;">
          <p style="margin: 0 0 8px 0; font-size: 14px; color: #666666;">Obrigado por escolher-nos!</p>
          <p style="margin: 0; font-size: 12px; color: #999999;">© 2025 XIAOXIONG®</p>
        </td>
      </tr>
    </table>
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
            const diffTimestamp = dateObject - Date.now();
            // console.log(diffTimestamp)

            const cancelLimitTime = 30 // min

            if (diffTimestamp >= cancelLimitTime * 60 * 1000)  {
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