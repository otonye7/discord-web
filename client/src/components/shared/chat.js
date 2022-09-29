import { store } from "../../index";

export const updateDirectChatHistoryIfActive = (data) => {
    const { participants, messages } = data;
    //find id of user from token and id from active conversation
    const receiverId = store.getState().chat?.id;
    const userId = store.getState().user.userDetails._id;
    if(receiverId && userId){
        const userInConversation = [receiverId, userId];
        updateChatHistoryIfSameConversationActive({
            participants,
            userInConversation,
            messages
        })
    }
}

const updateChatHistoryIfSameConversationActive = ({ participants, userInConversation, messages }) => {
    const result = participants.every((participantsId) => {
        return userInConversation.includes(participantsId)
    })
    if(result){
        
    }
}