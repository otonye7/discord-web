const authSocket = require("./middlewares/authSocket");

const registerSocketServer = (server) => {
    const io = require("socket.io")(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    });
    io.use((socket, next) => {
        authSocket(socket, next)
    })
    io.on("connection", (socket) => {
        console.log(socket.id)
    })
}

module.exports = {
    registerSocketServer
}