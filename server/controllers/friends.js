const FriendInvitation = require("../models/friends");
const User = require("../models/user");
const friendsUpdate = require("../socketHandler/friends");

const postInvite = async (req, res) => {
    const { targetMailAddress } = req.body;
    const { userId, mail } = req.user;
    //check if target mail is not our email address;
    if(mail.toLowerCase() === targetMailAddress.toLowerCase()){
        return res.status(409).send("Sorry you cannot become friends with yourself")
    }
    //check if user exist in the database
    const targetUser = await User.findOne({
        mail: targetMailAddress.toLowerCase()
    })
    if(!targetUser){
        return res.status(404).send(`Friend of ${targetMailAddress} does not exist`)
    }
    //check if invitation has already been sent
    const invitationAlreadyReceived = await FriendInvitation.findOne({
        senderId: userId, 
        receiverId: targetUser._id
    });

    if(invitationAlreadyReceived){
        return res.status(409).send(`Invitation to ${targetMailAddress} has already been sent.`)
    }

    //check if user is already our friend
    const userAlreadyFriends = targetUser.friend.find(friendId => friendId.toString() === userId.toString())
    
    if(userAlreadyFriends){
        return res.status(409).send(`You are already friends with ${targetMailAddress}`)
    }

    //create new Invitation
    const newInvitation = await FriendInvitation.create({
        senderId: userId,
        receiverId: targetUser._id
    });

    //if invitation has been successfully saved then we would like to update friend if user is online
    friendsUpdate.updateFriendsPendingInvitation(targetUser._id.toString())
    
    return res.status(201).send("Invitation has been sent")

}

module.exports = {
    postInvite
}