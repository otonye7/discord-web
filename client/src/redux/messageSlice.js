import { createSlice } from "@reduxjs/toolkit";

let messageState = [];

export const messageSlice = createSlice({
    name: "message",
    initialState: messageState,
    reducers: {
        message: (state, action) => {
            state = state.push(...action.payload.data)
        }
    }
})
export const { message } = messageSlice.actions;
export default messageSlice.reducer