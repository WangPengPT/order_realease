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

        if (user && user.id && user.id == "admin") return true;

        return false;
    }

    login(params,socket) {
        let user = db.get(db.user, params.id);

        console.log(user," - " , params)

        if ((!user) && params.id == "admin") {
            db.set(db.user, params);
            user = params;
        }

        if (user && user.password == params.password) {
            if (socket) socket.user = user;
            return {
                result: true,
                user: user,
                url: user.url,
            }
        }
        else {
            return {
                result: false,
                message: "error password"
            }
        }
    }

    addUser(params) {
        let user = db.get(db.user, params.id);
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

            db.set(db.user, user);
            return {
                result: true,
            }
        }
    }

    setUser(params) {
        let user = db.get(db.user, params.id);
        if (user) {
            user = {...user, ...params}
            db.set(db.user, user);
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

     getAll() {
        const datas = db.getAll(db.user);
        return {
            result: true,
            datas: datas,
        }
    }
}



const userManager =  new UserManager();
module.exports = userManager;