const User = require("../models/user");
const FriendInvitation = require("../models/friends");
const serverStore = require("../serverStore");

const updateFriendsPendingInvitation = async (userId) => {
    try {
        const pendingInvitations = await FriendInvitation.find({
            receiverId: userId
        }).populate("senderId", "_id username mail");
        //check if user of specified userId has active connective.
        const receiverList = serverStore.getActiveConnections(userId);
        const io = serverStore.getSocketServerInstance();
        receiverList.forEach((receiverSocketId) => {
            io.to(receiverSocketId).emit("friends-invitations", {
                pendingInvitations:  pendingInvitations ? pendingInvitations : []
            })
        })
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    updateFriendsPendingInvitation
}
