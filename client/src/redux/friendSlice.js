import { createSlice } from "@reduxjs/toolkit";

let friendsState = [];

// let onlineUsers = [];

export const friendsSlice = createSlice({
    name: "friends",
    initialState: friendsState,
    reducers: {
        friends: (state, action) => {
            state = state.push(...action.payload.data)
        }
    }
})
export const { friends } = friendsSlice.actions;
export default friendsSlice.reducer