
const db = require('../utils/db');
const socket = require('../utils/socket');
const { execFile } = require('child_process');
const path = require('path');
const fs = require('fs');

const BASE_PORT = 7100

class ServerManager {


    maxPort = BASE_PORT;

    constructor() {

    }

    async init() {
        socket.registerMessage("addServer", this.addServer.bind(this));
        socket.registerMessage("getAllServer", this.getAll.bind(this));

        this.maxPort = await db.getValue("server_max_id", BASE_PORT);
    }

    async addServer(params) {

        const name = params.id;
        const param1 = this.maxPort;


        const serverData = await db.get(db.server, name);
        if (serverData) {
            return {
                result: false,
                message: "has record."
            }
        }

        this.maxPort = this.maxPort + 1;
        await db.setValue("server_max_id", this.maxPort);

        try {

            const callback = (error, stdout, stderr) => {
                if (error) console.error(`执行错误: ${error}`);
                else console.log(`输出: ${stdout}`);
            };

            const scriptPath = path.resolve(process.cwd(), '../generate-pm2-config.sh');
            if (!fs.existsSync(scriptPath)) {
                throw new Error(`can't find: ${scriptPath}`);
            }

            execFile(scriptPath, [param1, name, 'true'], {cwd: path.dirname(scriptPath)}, callback);

        } catch (e) {
            console.log(e)
        }


        const data = {id: name, url: `https://v.xiaoxiong.pt:${param1}`}
        await db.set(db.server, data);

        return {
            result: true,
            data,
        };
    }

    async getAll() {
        const datas = await db.getAll(db.server);
        return {
            result: true,
            datas: datas,
        }
    }
}


const serverManager =  new ServerManager();
module.exports = serverManager;