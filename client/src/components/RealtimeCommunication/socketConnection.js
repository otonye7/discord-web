import io from "socket.io-client";
import { store } from "../../index"
import { pendingFriends } from "../../redux/pendingFriendsSlice";
import { friends } from "../../redux/friendSlice";
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
        console.log(pendingArray)
        store.dispatch(pendingFriends({
           data: pendingArray
        }))
    })

    socket.on("friends-list", (data) => {
        const { friend } = data;
        const friendsArray = friend.map((f) => f)
        console.log(friendsArray)
        store.dispatch(friends({
          data: friendsArray
        }))
    })

}
export default connectWithSocketServer