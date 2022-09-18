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

const updateFriends = async (userId) => {
    try {
          //find active connections of active id
        const receiverList = serverStore.getActiveConnections(userId)
        if(receiverList.length > 0){
            const user = await User.findById(userId, { _id: 1, friend: 1 }).populate("friend", "_id username mail");
            if(user){
                const friendsList = user.friend.map((f) => {
                    return {
                        id: f._id,
                        mail: f.mail,
                        username: f.username
                    }
                })
                //get io instance.
                const io = serverStore.getSocketServerInstance();
    
                receiverList.forEach((receiverSocketId) => {
                    io.to(receiverSocketId).emit("friends-list", {
                        friend: friendsList ? friendsList : []
                    })
                })
        }
        }
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    updateFriendsPendingInvitation,
    updateFriends
}
