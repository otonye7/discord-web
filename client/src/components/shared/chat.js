import { store } from "../../index";
import { message } from "../../redux/messageSlice";

export const updateDirectChatHistoryIfActive = (data) => {
    console.log(data)
    const { participants, messages } = data;
    // console.log(data)
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
        store.dispatch(message({
            data: messages
        }))
    }
}