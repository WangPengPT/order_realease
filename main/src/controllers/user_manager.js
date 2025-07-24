const db = require('../utils/db');
const socket = require('../utils/socket');

const httpAPI = require('../utils/http_api');

class UserManager {
    constructor() {
    }

    init() {
        socket.registerMessage("login", this.login);
        socket.registerMessage("addUser", this.defineOPFun(this.addUser));
        socket.registerMessage("setUser", this.defineOPFun(this.setUser));
        socket.registerMessage("getAll", this.defineOPFun(this.getAll));

        httpAPI.get("/login", (query)=> {
            const { id, pwd } = query;
            return this.login({id: id, password: pwd});
        })
    }

    login(params,socket) {
        let user = db.get(db.user, params.id);

        console.log(user," - " , params)

        if ((!user) && params.id == "admin") {
            db.put(db.user, params);
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

    defineOPFun(fun) {
        return (params,socket) => {

            if (socket && socket.user && socket.user.id && socket.user.id == "admin") {
                return fun(params,socket);
            }

            return {result: false, message: "no operation"};
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

            db.put(db.user, user);
            return {
                result: true,
            }
        }
    }

    setUser(params) {
        let user = db.get(db.user, params.id);
        if (user) {
            user = {...user, ...params}
            db.put(db.user, user);
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
        var datas = db.getAll(db.user);
        return {
            result: true,
            datas: datas,
        }
    }
}



const userManager =  new UserManager();
module.exports = userManager;