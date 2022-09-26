const Conversation = require("../models/conversation");
const serverStore = require("../serverStore");

const updateChatHistory = async (conversationId, toSpecifiedSocketId = null) => {
    const conversation = await Conversation.findById(conversationId).populate({
        path: "messages",
        model: "Message",
        populate: {
            path: "author",
            model: "User",
            select: "username _id"
        }
    })
    if(conversation){
        const io = serverStore.getSocketServerInstance();
        if(toSpecifiedSocketId){
            //initial update of chat history
            return io.to(toSpecifiedSocketId).emit("direct-chat-history", {
                messages: conversation.messages,
                participants: conversation.participants
            })
        }
        //else check if online and emit events
        conversation.participants.forEach(userId => {
            const activeConnection = serverStore.getActiveConnections(userId.toString())
            activeConnection.forEach((socketId) => {
                io.to(socketId).emit("direct-chat-history", {
                    messages: conversation.messages,
                    participants: conversation.participants
                })
            })
        })
    }
}
module.exports = {
    updateChatHistory
}