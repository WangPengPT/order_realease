const { Server } = require('socket.io');

const msgFuns = {}

let io;

class Socket {

    static checkOP = (user,cmd)  => {
        return true;
    }

    static init(server) {
        io = new Server(server, {
            cors: {
                origin: "*",
                methods: ["GET", "POST"]
            }
        });

        io.on('connection', async (socket) => {
            console.log('New client connected:', socket.id);

            // 发送历史消息
            try {
                socket.emit('init');
            } catch (err) {
                console.error('Error fetching messages:', err);
            }

            // 监听新消息
            socket.on('message', async (msg, params, callback) => {

                //console.log(msg);

                try {
                    if (msgFuns[msg]) {
                        const ret = await Socket.callFun(socket, msg, params);
                        if (callback) callback(ret);
                    } else {
                        if (callback) callback({error: "invalid message"});
                    }
                } catch (err) {
                    console.error('Error saving message:', err);
                    if (callback) callback({error: "call message exception"});
                }
            });

            // 断开连接
            socket.on('disconnect', () => {
                console.log('Client disconnected:', socket.id);
            });

        });

        console.log('Socket.IO server initialized');
    }

    static registerMessage(msg,fun) {
        msgFuns[msg] = fun;
    }

    static async callFun(socket, msg, params) {

        const fun = msgFuns[msg]

        if (socket && this.checkOP(socket.user, msg)) {
            const ret = await fun(params, socket);
            return ret;
        }
        return {result: false, message: "no operation"};
    }

    static broadcast(msg,data) {
        io.emit(msg,data)
    }
}

module.exports = Socket;