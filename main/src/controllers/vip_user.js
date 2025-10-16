
const DB = require('../utils/db');
const httpAPI = require("../utils/http_api");
const Tools = require('../utils/tools');

const db_name = "vip_user";

class VIPUserManager {

    constructor() {
    }

    init(io) {
        this.io = io
        this.loginedUsers = {}


        httpAPI.get("vip_login", async ({key, password}) => {
            const ret = await this.login(key, password)
            return ret
        })

        httpAPI.get("vip_register", async (user) => {
            const ret = await this.registerUser(user)
            console.log(ret)
            return (ret)
        })

        httpAPI.get("vip_change_password", async ({token, oldPwd, newPwd}) => {
            const ret = await this.change_password(token, oldPwd, newPwd)
            return ret
        })

        httpAPI.get("add_point", async ({token, point}) => {
            const ret = await this.add_point(token, point)
            return ret
        })
    }



    async change_password(token, oldPwd, newPwd)
    {
        const user = this.getUserByToken(token)
        if (user &&  user.password == oldPwd) {

            user.password = newPwd
            DB.set(db_name, user)

            return {
                result: true
            }
        }

        return {
            result: false,
            error: "error password"
        }
    }

    async add_point(token,point) {
        const user = this.getUserByToken(token)
        if (user) {

            user.points += point
            DB.set(db_name, user)

            return {
                result: true
            }
        }

        return {
            result: false,
            error: "error password"
        }
    }

    async login(key, password) {

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

            this.onLogin(user)

            return {
                result: true,
                user: user,
            }
        } else {
            return {
                result: false,
                error: "login error"
            }
        }
    }


    check_sting(str) {
        if (typeof str != 'string') return false
        if (str == '') return false;

        return true;
    }

    async registerUser( user) {

        console.log(user)

        if (!this.check_sting(user.id)) {
            return {
                result: false,
                error: "invalid id"
            }
        }

        if (!this.isEmail(user.email)) {
            return {
                result: false,
                error: "invalid email."
            }
        }

        if (!this.isPhone(user.phone)) {
            return {
                result: false,
                error: "invalid pone"
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

        user.registrationDate = Date.now();
        user.points = 0;

        DB.set(db_name, user)

        this.onLogin(user)

        return {
            result: true,
            user: user,
        }
    }

    getUserByToken(token) {
        return this.loginedUsers[token]
    }

    isPhone(phone) {
        if (!this.check_sting(phone)) {
            return false;
        }
        const regex = /^(\+?[1-9]\d{0,2}[-.\s]?)?($\d{1,4}$[-.\s]?)?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
        return regex.test(phone);
    }

    isEmail(email) {
        if (!this.check_sting(email)) {
            return false;
        }
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
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

    onLogin(user) {
        const code = Tools.generateUniqueCode();
        user.token = code

        for (const codeKey in this.loginedUsers) {
            if (this.loginedUsers[codeKey].id == user.id) {
                this.loginedUsers[codeKey] = undefined
                break;
            }
        }

        this.loginedUsers[code] = user
    }


}

module.exports = new VIPUserManager();