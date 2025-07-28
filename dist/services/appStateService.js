const { appState, AppState } = require('../state.js');
const { tablesPassword } = require('../model/tableManager.js')
const db = require('../filedb.js')
const { logger } = require('../utils/logger.js')

function loadAppState() {
    try {
        const data = db.loadAppStateData()
        if (data) {
            const loaded = AppState.fromJSON(data)
            // 用数据覆盖全局 appState
            appState.updateAppState(loaded)
            logger.info(`加载现有数据`)
        } else {
            logger.info(`创建新数据`)
        }
        //tablesPassword.init(appState.tables)
    } catch (error) {
        console.warn("Error: ", error)
    }

}

function updadeHasDuck(value) {
    try {
        appState.updateDuck(value)
        if (appState.hasDuck === value) return {success: true, data: value}
        else throw new Error("Faild upadte has duck")
    } catch (error) {
        return {success: false, data: error.message}
    }
    
}


function getAllTables() {
    try {
        const tables = appState.tables
        return {
            success: true,
            data: tables.toJSON()
        }
    } catch (error) {
        console.warn("Error: ", error)
        return {
            success: false,
            data: error.message
        }
    }
}

function saveAppState() {
    try {
        db.saveAppStateData(appState)
        db.saveData("menu",appState.menu);
    } catch (error) {
        console.warn("Error: ", error)
    }

}

function updatePrice(lunchPrice, dinnerPrice) {
    try {
        const newAppState = appState.updatePrice(lunchPrice, dinnerPrice)
        const data = {
            lunchPrice: newAppState.lunchPrice,
            dinnerPrice: newAppState.dinnerPrice
        }
        return { success: true, data: data }
    } catch (error) {
        console.warn("Error: ", error)
        return { success: false, data: error.message }
    }

}


function getTableTotalAmout(tableId) {
    try {
        if (!tableId) throw new Error("Non Input Value")
        const prices = appState.getTableTotalAmout(tableId)
        const res = {
            success: true,
            data:
                prices
        }
        return res
    } catch (error) {
        console.warn("Error: ", error)
        return { success: false, data: error.message }
    }

}

function setFanDays(value) {
    try {
        if (typeof value !== "boolean") { throw new Error('Invalid input') }
        appState.setFanDays(value)
        const res = { success: true, data: appState.isFanDays }
        return res
    } catch (error) {
        console.warn("Error: ", error)
        return { success: false, data: error.message }
    }

}

function getFanDays() {
    return appState.isFanDays
}

function getMenuAndTab() {
    return {
        success: true,
        data: {
            menu: appState.menu,
            menuTab: appState.orderMenuTab
        }
    }
}

function updateDishRates(value){
    try{
        const findDish = appState.menu.find(item => item.id === value.dishId)
        if (findDish) {
            if(findDish.rates){ findDish.rates += 1 }
            else{ findDish.rates = 1 }

            if(findDish.likes && value.like === 1){ findDish.likes += 1 }
            else{ findDish.likes = 1 }

            if(findDish.monthRates){
                findDish.monthRates.rates += 1
                if(value.like === 1){
                    findDish.monthRates.likes += 1
                }
            }else{
                if(value.like === 1){
                    findDish.monthRates = { likes: 1, rates: 1 }
                }else{
                    findDish.monthRates = { likes: 0, rates: 1 }
                }
            }

            return {success: true, data: findDish }
        }else{
            logger.info("Dish not found")
            return {success: false, data: "Dish not found" }
        }
    }catch (error){
        console.warn("Error: ", error)
        return { success: false, data: error.message }
    }

}

module.exports = {
    loadAppState,
    saveAppState,
    updatePrice,
    getTableTotalAmout,
    getAllTables,
    setFanDays,
    getFanDays,
    updadeHasDuck,
    getMenuAndTab,
    updateDishRates,
};
