const axios = require('axios');

class OrderWebhookClient {
    constructor(apiKey) {
        this.client = axios.create({
            baseURL: 'https://itvgsdpygfjlwdkzctfv.supabase.co/functions/v1/webhook',
            headers: {
                'x-api-key': '10151015',
                'Content-Type': 'application/json'
            },
            timeout: 10000 // 10秒超时
        });
    }


    /**
     * 1. 更新订单 或者 增加订单
     * 仅需传入 external_id 和需要修改的字段
     */
    async updateOrder(updateData) {
        const data = this.mapData(updateData)
        return this._sendRequest('sync_order', data);
    }

    // 内部通用请求方法
    async _sendRequest(action, data) {
        try {
            const response = await this.client.post('', { action, data });
            console.log(`[${action}] 成功:`, response.data);
            return response.data;
        } catch (error) {
            const errorMsg = error.response ? error.response.data : error.message;
            console.error(`[${action}] 失败:`, errorMsg);
            throw errorMsg;
        }
    }

    mapData(data) {
        return data
    }
}

const orderClient = new OrderWebhookClient();
module.exports = orderClient;