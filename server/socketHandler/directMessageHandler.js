const Conversation = require("../models/conversation");
const Message = require("../models/message");
const chatUpdates = require("../updates/chat");

const directMessageHandler = async (socket, data) => {
    try {
        const { userId } = socket.user;
        const { receiverUserId, content } = data;
        const message = await Message.create({
            content: content,
            authorId: userId,
            date: new Date(),
            type: "DIRECT"
        });
        //IF CONVERSATION EXIST BETWEEN THESE TWO USERS.
        //IF NOT CREATE NEW.
        const conversation = await Conversation.findOne({
            participants: { $all: [userId, receiverUserId] }
        })

        if(conversation){
            conversation.messages.push(message._id);
            await conversation.save();
            //update to sender and receiver if he is online
            chatUpdates.updateChatHistory(conversation._id.toString());
        } else {
            //create new if not exist
            const newConversation = await Conversation.create({
                messages: [message._id],
                participants: [userId, receiverUserId]
            })
            //update to sender and receiver if online
            chatUpdates.updateChatHistory(conversation._id.toString());
        }

    } catch (err) {
        console.log(err)
    }
}

module.exports = directMessageHandler