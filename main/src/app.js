const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { createServer } = require('http');
const socket = require('./utils/socket');
const userManager = require('./controllers/user_manager');
const httpAPI = require('./utils/http_api');
const fs = require("fs");
const https = require("https");
const http = require("http");
const tools = require('./utils/tools')

const app = express();
let port = 80;

// 中间件
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 静态文件
app.use(express.static('public'));

// 简单路由
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 创建 HTTP 服务器
let server

let file_key = '/etc/letsencrypt/live/v.xiaoxiong.pt/privkey.pem';
let file_cert = '/etc/letsencrypt/live/v.xiaoxiong.pt/fullchain.pem';

if (tools.checkKeyFileSync(file_key))
{
    console.log(file_key);
    console.log(file_cert);

    // 配置 HTTPS 选项
    const httpsOptions = {
        key: fs.readFileSync(file_key),
        cert: fs.readFileSync(file_cert),
    };
    server = https.createServer(httpsOptions, app);

    app.use((req, res, next) => {
        if (!req.secure) {
            // 自动重定向 HTTP 到 HTTPS
            return res.redirect(`https://${req.headers.host}${req.url}`);
        }
        next();
    });
	
	port = 443;
}
else
{
    server = http.createServer(app);
}

httpAPI.app = app;
// 初始化 Socket.IO
socket.init(server);
userManager.init();

// 启动服务器
server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});