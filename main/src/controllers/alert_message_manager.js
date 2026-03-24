const db = require('../utils/db');
const socket = require('../utils/socket');

class AlertMessageManager {

    static manager = 'manager'
    static client = 'client'

    static types = {alert:'alert', message:'message'};
    static without_code = 'without-code'

    constructor() {
        this.filterAlertCode = true
        this.alert_codes = ['401_1','401_2','401_3']

        this.filterMessageCode = true
        this.message_codes = ['center_server','update_server']
    }

    async init() {
        console.log("[Alert Message Manager] Init")

        socket.registerMessage("g_alert", this.alert.bind(this));
        socket.registerMessage("g_message", this.message.bind(this));

        socket.registerMessage('get_all_messages_alerts', this.get_all.bind(this))
        socket.registerMessage('delete_all_messages_alerts', this.delete_all.bind(this))
        socket.registerMessage('delete_all_by_type', this.delete_all_by_type.bind(this))
        socket.registerMessage('delete_message_alert', this.delete.bind(this))
        socket.registerMessage('messages_alerts', this.messages_alerts.bind(this))

    }

    messages_alerts(data) {
        console.log("[Alert Message Manager] messages_alerts:", data);
        try{
            this.verifyType(data.type)

            const from = "center_server"
            const send_data = {
                code: data.code,
                message:data.message,
                message_pt:data.message_pt,
                message_en: data.message_en,
                message_cn: data.message_cn
            }

            for(const to of data.to){
                this.send(data.type, from, to, send_data)
            }

            return {success:true}
        }catch(error){
            return {success: false, data: error.message}
        }
    }

    alert(data){
        const from = data.restaurant;
        const to = data.restaurant;
        let alert = data.alert

        this.verifyAlertCode(alert.code)

        this.send(AlertMessageManager.types.alert, from, to, alert)

        return {success:true};

    }

    message(data){
        const from = data.restaurant;
        const to = data.restaurant;
        let msg = data.msg;

        this.verifyMessageCode(msg.code)

        return this.send(AlertMessageManager.types.message, from, to, msg)

    }

    send(type, from, to, data, identity=AlertMessageManager.manager){
        try{
            console.log("[Alert Message Manager] Send "+type.toUpperCase()+":", data,", From:",from,", To:", to);

            this.verifyType(type)

            const send_data = {from, identity, ...data}
            const destination = type + "_" + to

            socket.broadcast(destination, send_data)

            this.increment(to, type, send_data)

            return {success:true}
        }catch (error){
            console.log("[Alert Message Manager] send, Error:", error.message);
            return {success: false, data: error.message}
        }
    }

    close(type, from, to, data, identity=AlertMessageManager.manager){
        try {
            console.log("[Alert Message Manager] Close "+type.toUpperCase()+":", data,", From:",from,", To:", to);

            this.verifyType(type)

            const close_data = {from, identity, ...data}
            const destination = type + "_close_" + to

            socket.broadcast(destination, close_data)

            return {success:true}
        } catch(error){
            console.log("[Alert Message Manager] close, Error:", error.message);
            return {success: false, data: error.message}
        }
    }

    async increment(restaurant, type, data){
        await this.save_to_db(restaurant, type, data, 1)
    }

    async decrement(restaurant, type, data){
        await this.save_to_db(restaurant, type, data, -1)
    }

    async save_to_db(restaurant, type, data, delta){
        let restaurantData = await this.get_restaurant_data({restaurant: restaurant})
        const id = (data.code ? data.code : AlertMessageManager.without_code) + '-' + data.message
        const find = restaurantData[type].find((i) =>{return i.id == id })
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

    async delete(data){
        try{
            console.log("[Alert Message Manager] Delete:", data)
            this.verifyType(data.type)
            const type = data.type;
            const id = data.id;
            const restaurant_data = await this.get_restaurant_data(data)
            const oldData = restaurant_data[type];
            const newData = []
            for(const item of oldData){
                if(item.id != id){
                    newData.push(item)
                }else{
                    if(type==AlertMessageManager.types.message){
                        this.close(type,item.value.from, data.restaurant, item.value)
                    }
                }
            }
            restaurant_data[type] = newData;

            await db.set(db.alertMessageTable, restaurant_data)
            return {success:true}
        } catch(error){
            console.log("[Alert Message Manager] Delete Error:",error.message)
            return {success:false, data:error.message}
        }
    }

    async delete_all_by_type(data){
        try{
            const type = data.type;
            this.verifyType(type)
            console.log("[Alert Message Manager] Delete by type:",type)

            const all = await this.get_all()
            for(const item of all){
                const type_data = item[type]
                if(type == AlertMessageManager.types.message){
                    for(let type_item of type_data){
                        this.close(type, type_item.value.from, item.id, type_item.value)
                    }
                }
                item[type] = []

                await db.set(db.alertMessageTable, item)
            }

            return {success:true}
        }catch(error){
            console.log("[Alert Message Manager] Delete by type Error:",error.message)
            return {success:false, data:error.message}
        }
    }

    async delete_all(){
        try{
            console.log("[Alert Message Manager] Delete ALL")
            const all = await this.get_all()
            for(const data of all){
                for(const message of data.message){
                    this.close(AlertMessageManager.types.message, message.value.from, data.id, message.value)
                }
                await db.del(db.alertMessageTable, data.id)
            }
            return {success:true}
        }catch (error){
            console.log("[Alert Message Manager] Delete ALL Error:",error.message)
            return {success:false, data:error.message}
        }
    }

    verifyType(type){
        if(!Object.keys(AlertMessageManager.types).includes(type)){
            throw new Error('Invalid type');
        }
    }

    verifyAlertCode(code){
        if(!this.filterAlertCode) return
        if(!this.alert_codes.includes(code)){
            throw new Error('Invalid Alert Code');
        }
    }

    verifyMessageCode(code){
        if(!this.filterMessageCode) return
        if(!this.message_codes.includes(code)){
            throw new Error('Invalid Message Code');
        }
    }

}

const alertMessageManager =  new AlertMessageManager();
module.exports = alertMessageManager;