const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { createServer } = require('http');
const socket = require('./utils/socket');
const userManager = require('./controllers/user_manager');
const httpAPI = require('./utils/http_api');

const app = express();
const port = 80;

// 中间件
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 静态文件
app.use(express.static('public'));

// 简单路由
app.get('/', (req, res) => {
    res.send('Express + Socket.IO + LevelDB Server');
});

// 创建 HTTP 服务器
const server = createServer(app);

httpAPI.app = app;
// 初始化 Socket.IO
socket.init(server);
userManager.init();

// 启动服务器
server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});