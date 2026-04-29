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



    httpAPI.pos("/mbwaypay/callback.php", async (query) => {
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

    httpAPI.get("/mbwaypay/callback.php", async (query) => {
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

    this.registerIfthenpayCallbackProxy();
    this.registerMonthlyPaymentsAggregateAPI();

    this.serverRouteCache = new Map();
    this.refreshServerRouteCache(true).catch((error) => {
      console.error("[ifthenpay-proxy] init server route cache failed:", error);
    });

    this.updateCheckStateData = []
    this.updateCheckState()
  }

  registerMonthlyPaymentsAggregateAPI() {
    httpAPI.pos("/payments/monthly/all-servers", async (query) => {
      return await this.getMonthlyPaymentsAcrossAllServers(query || {});
    });
  }

  normalizeMonthInput(query = {}) {
    const now = new Date();
    const yearNum = Number(query.year) || now.getFullYear();
    const monthNum = Number(query.month) || (now.getMonth() + 1);

    return {
      year: String(yearNum),
      month: String(monthNum).padStart(2, "0")
    };
  }

  parseBooleanInput(value, defaultValue = false) {
    if (value === undefined || value === null) {
      return defaultValue;
    }
    if (typeof value === "boolean") {
      return value;
    }

    const normalized = String(value).trim().toLowerCase();
    if (["1", "true", "yes", "y", "on"].includes(normalized)) {
      return true;
    }
    if (["0", "false", "no", "n", "off"].includes(normalized)) {
      return false;
    }
    return defaultValue;
  }

  parseAmount(value) {
    if (typeof value === "number") {
      return Number.isFinite(value) ? value : 0;
    }

    const raw = String(value || "").trim();
    if (!raw) return 0;

    const normalized = raw.replace(",", ".").replace(/[^0-9.-]/g, "");
    const amount = Number(normalized);
    return Number.isFinite(amount) ? amount : 0;
  }

  buildServerPaymentSummary(serverId, orders = []) {
    const summary = {
      totalOrders: orders.length,
      totalAmount: 0,
      paidAmount: 0,
      stateCount: {},
      typeCount: {}
    };

    for (const order of orders) {
      const payState = String(order?.pay_state || order?.financial_status || "unknown");
      const payType = String(order?.pay_type || (order?.payment_gateway_names || [])[0] || "unknown");
      const amount = this.parseAmount(order?.total_price);

      summary.totalAmount += amount;
      summary.stateCount[payState] = (summary.stateCount[payState] || 0) + 1;
      summary.typeCount[payType] = (summary.typeCount[payType] || 0) + 1;

      if (payState.toLowerCase() === "paid") {
        summary.paidAmount += amount;
      }
    }

    summary.totalAmount = Number(summary.totalAmount.toFixed(2));
    summary.paidAmount = Number(summary.paidAmount.toFixed(2));

    return {
      serverId,
      ...summary
    };
  }

  attachServerInfoToOrders(orders = [], serverMeta = {}) {
    const serverId = String(serverMeta.serverId || "");

    return orders.map((order) => ({
      ...order,
      serverId
    }));
  }

  mergeSummary(target, source) {
    target.totalOrders += source.totalOrders || 0;
    target.totalAmount += source.totalAmount || 0;
    target.paidAmount += source.paidAmount || 0;

    const stateCount = source.stateCount || {};
    const typeCount = source.typeCount || {};

    for (const key of Object.keys(stateCount)) {
      target.stateCount[key] = (target.stateCount[key] || 0) + stateCount[key];
    }

    for (const key of Object.keys(typeCount)) {
      target.typeCount[key] = (target.typeCount[key] || 0) + typeCount[key];
    }
  }

  async fetchMonthlyOrdersFromServer(server, year, month, countLimit) {
    const serverId = String(server?.id || "").trim();
    const serverUrl = String(server?.url || "").trim();
    if (!serverId || !serverUrl) {
      return {
        success: false,
        serverId,
        error: "INVALID_SERVER_CONFIG"
      };
    }

    try {
      const targetUrl = `${serverUrl.replace(/\/+$/, "")}/api/query_data`;
      const payload = {
        table: "order",
        count: countLimit,
        query: {
          pickup_date: { "$regex": `^${year}/${month}` }
        }
      };

      const { statusCode, body } = await request(targetUrl, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const text = await body.text();
      if (statusCode < 200 || statusCode >= 300) {
        return {
          success: false,
          serverId,
          statusCode,
          error: text || `HTTP_${statusCode}`
        };
      }

      let orders = [];
      try {
        const parsed = text ? JSON.parse(text) : [];
        orders = Array.isArray(parsed) ? parsed : [];
      } catch (_) {
        return {
          success: false,
          serverId,
          error: "INVALID_JSON_RESPONSE"
        };
      }

      const summary = this.buildServerPaymentSummary(serverId, orders);
      const serverName = server?.name || server?.shopify_name || serverId;
      const ordersWithServer = this.attachServerInfoToOrders(orders, {
        serverId,
        serverName,
        serverUrl
      });
      return {
        success: true,
        serverId,
        serverName,
        serverUrl,
        summary,
        orders: ordersWithServer
      };
    } catch (error) {
      return {
        success: false,
        serverId,
        error: error.message || "REQUEST_FAILED"
      };
    }
  }

  async getMonthlyPaymentsAcrossAllServers(query = {}) {
    const { year, month } = this.normalizeMonthInput(query);
    const includeOrders = this.parseBooleanInput(query.includeOrders, false);
    const countLimit = Math.min(Math.max(Number(query.count) || 1000, 1), 1000);

    const servers = await db.getAll(db.serverTable);
    const tasks = servers.map((server) =>
      this.fetchMonthlyOrdersFromServer(server, year, month, countLimit)
    );
    const results = await Promise.all(tasks);

    const globalSummary = {
      totalOrders: 0,
      totalAmount: 0,
      paidAmount: 0,
      stateCount: {},
      typeCount: {}
    };

    const successServers = [];
    const failedServers = [];

    for (const item of results) {
      if (!item.success) {
        failedServers.push(item);
        continue;
      }

      this.mergeSummary(globalSummary, item.summary);
      const serverData = {
        serverId: item.serverId,
        serverName: item.serverName,
        serverUrl: item.serverUrl,
        summary: item.summary
      };
      if (includeOrders) {
        serverData.orders = item.orders;
      }
      successServers.push(serverData);
    }

    globalSummary.totalAmount = Number(globalSummary.totalAmount.toFixed(2));
    globalSummary.paidAmount = Number(globalSummary.paidAmount.toFixed(2));

    return {
      success: failedServers.length === 0,
      month: `${year}-${month}`,
      serverCount: servers.length,
      successCount: successServers.length,
      failCount: failedServers.length,
      globalSummary,
      servers: successServers,
      failedServers
    };
  }

  registerIfthenpayCallbackProxy() {
    const app = httpAPI.app;
    if (!app) {
      console.error("[ifthenpay-proxy] express app not initialized");
      return;
    }

    const handler = this.handleIfthenpayCallbackProxy.bind(this);
    app.post("/api/checkout/ifthenpay/callback.php", handler);
    app.get("/api/checkout/ifthenpay/callback.php", handler);

  }

  extractOrderId(payload = {}) {
    const orderId = payload.orderId || payload.OrderId || payload.id || "";
    return String(orderId).trim();
  }

  // Keep orderId parsing aligned with server/controllers/paymentController.js
  normalizeRestaurantKey(value) {
    return String(value || "").trim().toUpperCase().replace(/[^A-Z0-9]/g, "");
  }

  getOrderRestaurantPrefix(orderId) {
    const raw = String(orderId || "").trim();
    const match = raw.match(/^(.*?)(\d{6})$/);
    if (!match) return this.normalizeRestaurantKey(raw);
    return this.normalizeRestaurantKey(match[1]);
  }

  async refreshServerRouteCache(force = false) {
    if (!force && this.serverRouteCache.size > 0) {
      return;
    }

    const servers = await db.getAll(db.serverTable);
    const nextCache = new Map();
    for (const server of servers) {
      const id = String(server?.id || "").trim();
      const url = String(server?.url || "").trim();
      if (!id || !url) continue;

      const prefix = this.normalizeRestaurantKey(server?.orderPrefix || "");
      if (prefix) {
        nextCache.set(prefix, { id, url });
        continue;
      }

      const fallback = this.normalizeRestaurantKey(id);
      if (fallback) {
        nextCache.set(fallback, { id, url });
      }
    }

    this.serverRouteCache = nextCache;
  }

  async getRestaurantRouteByOrderPrefix(orderPrefix) {
    const route = this.serverRouteCache.get(orderPrefix);
    return route || null;
  }

  updateServerRouteCacheEntry(server) {
    const id = String(server?.id || "").trim();
    const url = String(server?.url || "").trim();
    if (!id || !url) return;

    const prefix = this.normalizeRestaurantKey(server?.orderPrefix || "");
    if (prefix) {
      this.serverRouteCache.set(prefix, { id, url });
      return;
    }

    const fallback = this.normalizeRestaurantKey(id);
    if (fallback) {
      this.serverRouteCache.set(fallback, { id, url });
    }
  }

  removeServerRouteCacheEntry(serverId) {
    const normalizedId = this.normalizeRestaurantKey(serverId);
    if (!normalizedId) return;

    for (const [prefix, route] of this.serverRouteCache.entries()) {
      const routeId = this.normalizeRestaurantKey(route?.id || "");
      if (routeId === normalizedId || prefix === normalizedId) {
        this.serverRouteCache.delete(prefix);
      }
    }
  }

  buildCallbackPayload(req) {
    return {
      ...(req.query || {}),
      ...(req.body || {})
    };
  }

  buildCallbackForwardHeaders(req) {
    const headers = {
      "content-type": "application/json"
    };

    const token = req.headers["x-ifthenpay-token"];
    const callbackToken = req.headers["x-callback-token"];
    const queryToken = req.query?.key || req.body?.key;

    const finalToken = token || queryToken;
    if (finalToken) {
      headers["x-ifthenpay-token"] = String(finalToken);
    }
    if (callbackToken) {
      headers["x-callback-token"] = String(callbackToken);
    }

    return headers;
  }

  async handleIfthenpayCallbackProxy(req, res) {
    try {
      const payload = this.buildCallbackPayload(req);
      const orderId = this.extractOrderId(payload);
      if (!orderId) {
        return res.status(400).json({
          success: false,
          error: "ORDER_ID_REQUIRED"
        });
      }

      const orderPrefix = this.getOrderRestaurantPrefix(orderId);
      if (!orderPrefix) {
        return res.status(404).json({
          success: false,
          error: "RESTAURANT_NOT_FOUND_BY_ORDER_ID"
        });
      }

      const match = await this.getRestaurantRouteByOrderPrefix(orderPrefix);
      const restaurantUrl = String(match?.url || "").trim();
      if (!restaurantUrl) {
        return res.status(404).json({
          success: false,
          error: "RESTAURANT_NOT_FOUND_BY_ORDER_ID"
        });
      }

      const targetUrl = `${restaurantUrl.replace(/\/+$/, "")}/api/checkout/callback/ifthenpay`;
      const { statusCode, body } = await request(targetUrl, {
        method: "POST",
        headers: this.buildCallbackForwardHeaders(req),
        body: JSON.stringify(payload)
      });

      const responseText = await body.text();
      let responseData = {};
      if (responseText) {
        try {
          responseData = JSON.parse(responseText);
        } catch (_) {
          responseData = { raw: responseText };
        }
      }

      return res.status(statusCode).json(responseData);
    } catch (error) {
      console.error("[ifthenpay-proxy] callback forward failed:", error);
      return res.status(500).json({
        success: false,
        error: error.message || "CALLBACK_FORWARD_FAILED"
      });
    }
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