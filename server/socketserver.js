const authSocket = require("./middlewares/authSocket");
const newConnectionHandler = require("./socketHandler/newConnectionHandler");
const disconnectHandler = require("./socketHandler/disconnectHandler");
const directMessageHandler = require("./socketHandler/directMessageHandler")
const serverStore = require("./serverStore")

const registerSocketServer = (server) => {
    const io = require("socket.io")(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    })
    serverStore.setSocketServerInstance(io)

    io.use((socket, next) => {
       authSocket(socket, next)
    })

    const emitOnlineUsers = () => {
        const onlineUsers = serverStore.getOnlineUsers();
        io.emit("online-users",  { onlineUsers } )
    }

    io.on("connection", (socket) => {
        console.log(socket.id)
        newConnectionHandler(socket, io);
        emitOnlineUsers();

        socket.on("direct-message", (data) => {
            directMessageHandler(socket, data)
        });

        socket.on("direct-message-history", (data) => {
            directChatHistoryHandler(socket, data)
        })

        socket.on("disconnect", () => {
            disconnectHandler(socket)
        })
    })
    setInterval(() => {
        emitOnlineUsers()
    }, [8000])
}

module.exports = {
    registerSocketServer
}



