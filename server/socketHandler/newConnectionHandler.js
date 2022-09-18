const serverStore = require("../serverStore");
const friendsUpdate = require("../socketHandler/friends");

const newConnectionHandler = async (socket, io) => {
    const userDetails = socket.user;

    serverStore.addNewConnectedUser({
       socketId: socket.id,
       userId: userDetails.userId
     })

     //update pending invitation
     friendsUpdate.updateFriendsPendingInvitation(userDetails.userId);

     //update friendlist
     friendsUpdate.updateFriends(userDetails.userId);
}

module.exports = newConnectionHandler