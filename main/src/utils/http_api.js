
class HttpAPI {

    app = undefined;

    get(cmd,fn) {

        if (cmd.startsWith('/'))
        {
            cmd =  "/api" + cmd;
        }
        else {
            cmd =  "/api/" + cmd;
        }
        console.log("get: ", cmd );

        this.app.get(cmd, async (req, res) => {
            console.log("do get: ", cmd);

            const ret = await fn(req.query)
            res.json(ret);
        });
    }

    pos(cmd,fn) {

        if (cmd.startsWith('/'))
        {
            cmd =  "/api" + cmd;
        }
        else {
            cmd =  "/api/" + cmd;
        }
        console.log("post: ", cmd );

        this.app.post(cmd, async (req, res) => {
            console.log('Received Shopify Webhook:', req.body);
            const data = JSON.parse(req.body);
            await fn(data)
            res.status(200).json({received: true});
        });
    }
}

const api = new HttpAPI();

module.exports = api;