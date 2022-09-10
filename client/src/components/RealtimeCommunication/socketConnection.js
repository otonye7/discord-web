import io from "socket.io-client";

let socket = null;

export const connectWithSocketServer = (userDetails) => {
    const jwtToken = userDetails.userDetails.token
    socket = io("http://localhost:7000", {
        auth: {
            token: jwtToken
        }
    });

    socket.on("connect", () => {
        console.log("Successfully connected to socket io server");
        console.log(socket.id)
    })
}