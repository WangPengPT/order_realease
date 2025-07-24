const { Level } = require('level');
const path = require('path');

const dbPath = path.join(process.cwd(), 'db');
const db = new Level(dbPath, { valueEncoding: 'json' });


const deasync = require('deasync');

function syncPromise(promise) {
    let done = false;
    let result, error;

    promise.then(res => {
        result = res;
        done = true;
    }).catch(err => {
        error = err;
        done = true;
    });

    deasync.loopWhile(() => !done);

    return result;
}

class DB {

    // define table name of user
    static user = "user";

    static get(table,id) {
        try {
            const db_id = table + ":" + id;
            const ret = db.get(db_id);

            const result = syncPromise( ret );
            console.log("get result:" + result);
            return result;
        } catch (err) {
            return null;
        }
    }

    static put(table, value) {
        try {
            const db_id = table + ":" + value.id;
            const ret = db.put(db_id, value);
            const result = syncPromise(ret);
            console.log("put result:" + result);
            return result;
        } catch (err) {
            return null;
        }
    }

    static del(table, id) {
        try {
            const db_id = table + ":" + id;
            const ret = db.del(db_id);
            const result = syncPromise(ret);
            console.log("delete result:" + result);
            return result;
        } catch (err) {
            return null;
        }
    }


    static getAll(table) {
        try {
            const ret = DB.getAllFun(table);

            const result = syncPromise( ret );
            return result;
        } catch (err) {
            return [];
        }
    }

    static async getAllFun(table) {
        const list = [];
        for await (const [_, val] of db.iterator({
            gte: table,
            lte: table + '\xff'
        })) {
            list.push(val);
        }
        return list;
    }
}

module.exports = DB;