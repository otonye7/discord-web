import { createSlice } from "@reduxjs/toolkit";

let chatState = null;

// let onlineUsers = [];

export const chatSlice = createSlice({
    name: "chat",
    initialState: chatState,
    reducers: {
        chosenChat: (state, action) => {
            state = action.payload;
            console.log(state)
            return state
        }
    }
})
export const { chosenChat } = chatSlice.actions;
export default chatSlice.reducer