const { logger } = require('../utils/logger.js')
const tableService = require('../services/tableService.js');
const appStateService = require("../services/appStateService.js")
const { appState } = require('../state.js');

class TableSocket {
    constructor(io) {
        this.io = io
    }

    managerAddTable(tableData, callback) {
        logger.info(`管理端添加桌子 桌号 - ${tableData.id}`)
        const result = tableService.addNewTable(tableData);
        if (result.success) {
            logger.info(`管理端添加桌子成功`)
        } else {
            logger.info(`管理端添加桌子失败`)
            logger.info(`失败原因: ${result.message}`)
        }
        callback(result);;
    }


    deleteTable(id, callback) {
        logger.info(`管理端删除桌子 桌号 - ${id}`)
        const result = tableService.removeTable(id);
        if (result.success) {
            logger.info(`管理端删除桌子成功`)
        } else {
            logger.info(`管理端删除桌子失败`)
            logger.info(`失败原因: ${result.data}`)
        }
        callback(result);
    };

    // 清除桌子
    cleanTable(id, callback) {
        logger.info(`管理清除改桌子 桌号 - ${id}`)
        const result = tableService.cleanTable(id);
        if (result.success) {
            logger.info(`管理清除改桌子成功`)
        } else {
            logger.info(`管理清除改桌子失败`)
            logger.info(`失败原因: ${result.data}`)
        }
        callback(result);
    }

    // 修改桌子
    updateTable(tableData, callback) {
        logger.info(`管理端修改桌子状态 桌号 - ${tableData.id}; 成人 - ${tableData.peopleType.adults}; 儿童 - ${tableData.peopleType.children}; 桌子状态 - ${tableData.status}`)
        const result = tableService.updateTableWithoutOrder(tableData)

        if (result.success) {
            logger.info(`管理端修改桌子成功`)
        } else {
            logger.info(`管理端修改桌子失败`)
            logger.info(`失败原因: ${result.data}`)
        }
        callback(result);

        // 给客户端发送桌子信息
        const table = tableService.getTableById(tableData.id)
        if (table.success) {
            this.io.emit('client_table', table)
        }
    }

        // 返回table id ，发送桌子信息，目前价格
    clientGetTableById(socket,value, callback){
          const result = tableService.getTableById(value)
          //const price = appStateService.getCurrentPrice()
          //socket.emit('client_currentPrice', price)
          callback(result)
        }


        
    clientCall(id, cmd){
      tableService.clientCmd(id,cmd);
      this.io.emit("client_cmd", id, cmd);
   }

    registerHandlers(socket) {
        socket.on('add_table', (tableData, callback) => { this.managerAddTable(tableData, callback) })
        socket.on('remove_table', (id, callback) => { this.deleteTable(id, callback) })
        socket.on('clean_table', (id, callback) => { this.cleanTable(id, callback) });
        socket.on('update_table_exceptOrder', (tableData, callback) => { this.updateTable(tableData, callback) });
        this.io.emit('send_tables', appState.tables.toJSON());

        socket.on('client_get_table', (id, callback) => {callback(tableService.getTableById(id))})
        socket.on('get_table_by_id', (value, callback) => { this.clientGetTableById(socket, value, callback) });
        socket.on("client_cmd", (id,cmd) => { this.clientCall(id, cmd) });
        socket.on("click_msg", (id,cmd) => { tableService.clickMsg(id,cmd); });
    }
}

module.exports = { TableSocket }