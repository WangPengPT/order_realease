const DB = require("../utils/db");


class RedirectPage {


    async init(app) {
        this.app = app;
        await this.updateStore()
    }

    async updateStore(data) {

        let datas = [data]
        if (!data) {
            datas = await DB.getAll(DB.serverTable);
        }

        for (const data in datas) {
            let key = data.id

            if (key) {
                key = key.replaceAll("sc_", "sushicome")
                key = key.replaceAll("xx_", "xiaoxiongkitchen")
            }


            if (data.qr_addr && data.qr_addr != "") {
                key = data.qr_addr
            }

            if (!key) continue;

            let url = data.url + "/reservePage";

            this.app.get('/' + key, (req, res) => {
                res.redirect(url);
            });
        }

    }
}

module.exports =  new RedirectPage();

