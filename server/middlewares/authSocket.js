const jwt = require("jsonwebtoken");

const config = process.env

const verifyTokenSocket = (socket, next) => {
    // console.log(socket.handshake.auth)
    const token = socket.handshake.auth?.token;
    try {
        const decoded = jwt.verify(token, config.JWT_TOKEN);
        socket.user = decoded
    } catch(err){
        const socketError = new Error("Not Authorized");
        return next(socketError)
    }
    next()
}

module.exports = verifyTokenSocket