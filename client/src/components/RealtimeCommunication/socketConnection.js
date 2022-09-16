import io from "socket.io-client";
import storeRef from "../../index"
import { pendingFriends } from "../../redux/friendsSlice";
let socket = null;
 const connectWithSocketServer = (userDetails) => {
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

    socket.on("friends-invitations", (data) => {
        const { pendingInvitations } = data;
        const pendingArray = pendingInvitations.map((friends) => friends)
        storeRef.dispatch(pendingFriends({
            data: pendingArray
        }))
    })

}
export default connectWithSocketServer