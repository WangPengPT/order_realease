
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

        this.app.get(cmd, (req, res) => {
            console.log("do get: ", cmd );

            const ret = fn(req.query)
            res.json(ret);
        });
    }
}

const api = new HttpAPI();

module.exports = api;