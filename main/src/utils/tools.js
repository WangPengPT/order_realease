const fs = require("fs");

class Tools {
    static checkKeyFileSync(file) {
        try {
            fs.accessSync(file);
            console.log('found: ' + file);
            return true;
        } catch (err) {
            console.log('didn\'t find: ' + file);
            return false;
        }
    }

    static generateUniqueCode() {
        const timestamp = Date.now().toString(36); // 将时间戳转换为36进制字符串
        const randomNum = Math.random().toString(36).substring(2, 5); // 生成随机字符串
        return `${timestamp}-${randomNum}`;
    }
}




module.exports = Tools;