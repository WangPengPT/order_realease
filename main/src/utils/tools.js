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
}




module.exports = Tools;