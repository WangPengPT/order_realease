const db = require('../utils/db');
const socket = require('../utils/socket');

const httpAPI = require('../utils/http_api');

class UserManager {

    constructor() {
    }

    init() {
        socket.checkOP = this.checkOP;

        socket.registerMessage("login", this.login);
        socket.registerMessage("addUser", this.addUser);
        socket.registerMessage("setUser", this.setUser);
        socket.registerMessage("getAll", this.getAll);

        httpAPI.get("/login", (query)=> {
            const { id, pwd } = query;
            return this.login({id: id, password: pwd});
        })
    }

    checkOP(user,cmd) {

        if (cmd == "login") return true;
        if (cmd.startsWith("g_")) return true;

        if (user && user.id && user.id == "admin") return true;

        return false;
    }

    async login(params, socket) {
        let user = await db.get(db.userTable, params.id);

        console.log(user, " - ", params)

        if ((!user) && params.id == "admin") {
            db.set(db.userTable, params);
            user = params;
        }

        if (user && user.password == params.password) {
            if (socket) socket.user = user;
            return {
                result: true,
                user: user,
                url: user.url,
            }
        } else {
            return {
                result: false,
                message: "error password"
            }
        }
    }

    async addUser(params) {
        let user = await db.get(db.userTable, params.id);
        if (user) {
            return {
                result: false,
                message: "exited user"
            }
        }
        else {
            user = {
                ...params
            }

            await db.set(db.userTable, user);
            return {
                result: true,
            }
        }
    }

    async setUser(params) {
        let user = await db.get(db.userTable, params.id);
        if (user) {
            user = {...user, ...params}
            await db.set(db.userTable, user);
            return {
                result: true,
            }
        }
        else {
            return {
                result: true,
            }
        }
    }

    async getAll() {
        const datas = await db.getAll(db.userTable);
        return {
            result: true,
            datas: datas,
        }
    }
}



const userManager =  new UserManager();
module.exports = userManager;