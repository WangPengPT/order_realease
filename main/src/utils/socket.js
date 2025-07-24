const { Server } = require('socket.io');
const msgFuns = {}

class Socket {

    static init(server) {
        const io = new Server(server, {
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
            socket.on('message', (msg, params, callback) => {

                console.log(msg,params);

                try {
                    if (msgFuns[msg]) {
                        const ret = msgFuns[msg](params, socket);
                        callback( ret );
                    }
                    else
                    {
                        callback( {error: "invalid message"} );
                    }
                } catch (err) {
                    console.error('Error saving message:', err);
                    callback( {error: "call message exception"} );
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
}

module.exports = Socket;