
class HttpAPI {

    app = undefined;

    get(cmd,fn) {
        this.app.get( "/api/" + cmd, (req, res) => {

            const ret = fn(req.query)
            res.json(ret);
        });
    }
}

const api = new HttpAPI();

module.exports = api;