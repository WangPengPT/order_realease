
const db = require('../utils/db');
const socket = require('../utils/socket');
const { execFile } = require('child_process');
const path = require('path');
const fs = require('fs');


class ServerManager {


    maxPort = 7000;

    constructor() {

    }

    init() {
        socket.registerMessage("addServer", this.addServer.bind(this));
        socket.registerMessage("getAllServer", this.getAll.bind(this));

        this.maxPort = db.getValue("server_max_id", 7000);
    }

    addServer(params) {

        const name = params.id;
        const param1 = this.maxPort;


        if ( db.get(db.server,name) ) {
            return {
                result: false,
                message: "has record."
            }
        }

        this.maxPort = this.maxPort + 1;
        db.setValue("server_max_id", this.maxPort);

        try {

            const callback = (error, stdout, stderr) => {
                if (error) console.error(`执行错误: ${error}`);
                else console.log(`输出: ${stdout}`);
            };

            const scriptPath = path.resolve(process.cwd(), '../generate-pm2-config.sh');
            if (!fs.existsSync(scriptPath)) {
                throw new Error(`can't find: ${scriptPath}`);
            }

            execFile(scriptPath, [param1, name, 'true'], { cwd: path.dirname(scriptPath) }, callback);

        } catch (e) {
            console.log(e)
        }


        const data = {id: name, url: `https://v.xixiaoxiong:${param1}`}
        db.set(db.server,data);

        return {
            result: true,
            data,
        };
    }

    getAll() {
        const datas = db.getAll(db.server);
        return {
            result: true,
            datas: datas,
        }
    }
}


const serverManager =  new ServerManager();
module.exports = serverManager;