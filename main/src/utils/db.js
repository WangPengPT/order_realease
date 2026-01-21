
const { MongoClient } = require('mongodb');
const httpAPI = require("./http_api");
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

let db = undefined

class DB {

    // define table name of user
    static userTable = "user";
    static serverTable = "server";
    static keyValueTable = "key_value"
    static orderTable = "order"
    static restaurantTable = "restaurant"
    static reserveTable = "reserve"

    static async init() {
        try {
            console.log('Connected to MongoDB');
            await client.connect();
            db = client.db('mgserver');

            console.log('Connected to MongoDB OK!');
        } catch (error) {
            console.error('Connection error:', error);
        }

        httpAPI.pos("/query_data", async (value) => {
            const datas = await this.queryData(value.table,value.query,value.count)
            return datas
        })
    }

    static async get(table,id, defValue) {

        const collection = db.collection(table);
        const users = await collection.find({ id: id }).toArray();

        if (users && users[0]) return users[0]

        return defValue
    }

    static async set(table, value) {
        const collection = db.collection(table);
        if (value.id) {
            console.log("collection.updateOne")
            const { _id, ...updateValue } = value;
            await collection.updateOne({ id: value.id }, { $set:  updateValue  }, { upsert: true });
        }
        else {
            await collection.insertOne(value);
        }
    }

    static async del(table, id) {
        const collection = db.collection(table);
        await collection.deleteOne({ id: id });
    }


    static async getAll(table) {
        const collection = db.collection(table);
        const users = await collection.find({}).toArray();
        return users
    }

    static async setValue(key,value) {
        const collection = db.collection(DB.keyValueTable);
        await collection.updateOne({ id: key }, { $set: {id: key, value: value} }, { upsert: true });
    }

    static async getValue(key,defValue) {
        const collection = db.collection(DB.keyValueTable);
        const users = await collection.find({ id: key }).toArray();

        if (users && users[0]) return users[0].value

        return defValue
    }

    static async getMaxValue(tableName,field,valueStartKey) {

        const table = db.collection(tableName);

        try {
            const pipeline = [
                {
                    // 1. 过滤掉空值，且只匹配以指定前缀开头的数据
                    $match: {
                        [field]: { $regex: new RegExp(`^${valueStartKey}\\d+`) }
                    }
                },
                {
                    // 2. 转换逻辑
                    $addFields: {
                        // 移除前缀并转为整数以便正确排序
                        numericPart: {
                            $toInt: {
                                $trim: {
                                    input: {
                                        $replaceAll: {
                                            input: `$${field}`,
                                            find: valueStartKey,
                                            replacement: ""
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    // 3. 按提取出的数字降序排列
                    $sort: { numericPart: -1 }
                },
                {
                    // 4. 只取最大的那一条
                    $limit: 1
                }
            ];

            const result = await table.aggregate(pipeline).toArray();

            // 如果找到结果，返回原始字段值 (如 "T102")，否则返回 null
            return result.length > 0 ? result[0][field] : null;

        } catch (error) {
            console.error(`获取字段 ${field} 最大值失败:`, error);
            return null;
        }
    }

    static async find(table, q, sort, count) {

        const collection = db.collection(table);
        let datas = []

        if (count) {
            if (sort) {
                datas = await collection.find(q).sort(sort).limit(count).toArray();
            }
            else {
                datas = await collection.find(q).limit(count).toArray();
            }
        }
        else if (sort) {
            datas = await collection.find(q).sort(sort).toArray();
        }
        else {
            datas = await collection.find(q).toArray();
        }

        if (datas) return datas

        return []
    }

    static async queryData(table,query,count){

        if (count > 1000) count = 1000;

        const collection = db.collection(table);
        const datas = await collection.find(query).limit(count).toArray();
        return datas;
    }

}

module.exports = DB;