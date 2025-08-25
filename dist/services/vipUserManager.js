
const DB = require('../db.js');

const db_name = "vip_user";

class VIPUserManager {

    constructor(io) {
        this.io = io
    }


    initSocket(socket) {
        socket.on("vip_login", async (key, password, callback) => {
            const ret = await this.login(socket, key, password)
            callback(ret)
        })

        socket.on("vip_register", async (user, callback) => {
            const ret = await this.registerUser(socket, user)
            callback(ret)
        })
    }

    async login(socket, key, password) {

        let q
        if (this.isEmail(key)) {
            q = this.getEmailQ(key)
        } else if (this.isPhone(key)) {
            q = this.getPhoneQ(key)
        } else {
            q = this.getIdQ(key)
        }


        const user = await DB.findOne(db_name, q)

        if (user && user.password == password) {
            return {
                result: true
            }
        } else {
            return {
                result: false,
                error: "login error"
            }
        }
    }

    async registerUser(socket, user) {

        if ((typeof user.email !== 'string') || (user.email == "")) {
            return {
                result: false,
                error: "invalid email."
            }
        }

        if ((typeof user.phone !== 'string') || (user.phone == "")) {
            return {
                result: false,
                error: "invalid pone"
            }
        }

        if ((typeof user.id !== 'string') || (user.id == "")) {
            return {
                result: false,
                error: "invalid id"
            }
        }


        const q = {
            $or: [
                {email: {$eq: user.email}},
                {phone: {$eq: user.phone}},
                {id: {$eq: user.id}}
            ]
        }

        const last = await DB.findOne(db_name, q)

        if (last) {
            return {
                result: false,
                error: "user is exists."
            }
        }

        this.onLogin(socket,user)

        return {
            result: true
        }
    }

    isPhone(email) {
        return false;
    }

    isEmail(email) {
        return false
    }

    getEmailQ(email) {
        const q = {
            phone: {$eq: email},
        }
        return q
    }

    getIdQ(id) {
        const q = {
            id: {$eq: id},
        }
        return q
    }

    getPhoneQ(phone) {
        const q = {
            phone: {$eq: phone},
        }
        return q
    }

    onLogin(socket,user) {
        socket.user = user
    }

}

module.exports = new VIPUserManager();