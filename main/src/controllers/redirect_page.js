const DB = require("../utils/db");


class RedirectPage {


    async init(app) {
        this.app = app;
        await this.updateStore()
    }

    async updateStore(data) {

        if (!this.app) return;

        let datas = [data]
        if (!data) {
            datas = await DB.getAll(DB.serverTable);
        }

        for (let i=0; i<datas.length; i++) {
            let data = datas[i]
            let key = data.id

            if (key) {
                key = key.replaceAll("sc_", "sushicome")
                key = key.replaceAll("xx_", "xiaoxiongkitchen")
            }


            if (data.qr_addr && data.qr_addr != "") {
                key = data.qr_addr
            }

            if (!key) {
                console.log("can't find store redirect:" + data);
                continue;
            }

            let url = data.url + "/takereserve";

            console.log("" + key + " => " + url);

            try {
                this.app.get('/' + key, (req, res) => {
                    res.redirect(url);
                });
            }
            catch (error) {
                console.log("error: " + error)
            }
        }

    }
}

const mod = new RedirectPage();
module.exports =  mod

