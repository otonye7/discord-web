import { createSlice } from "@reduxjs/toolkit";

let chatTypeState = null;

export const chatTypeSlice = createSlice({
    name: "chatType",
    initialState: chatTypeState,
    reducers: {
        chatType: (state, action) => {
            state = action.payload;
            console.log(state)
        }
    }
})
export const { chatType } = chatTypeSlice.actions;
export default chatTypeSlice.reducer;