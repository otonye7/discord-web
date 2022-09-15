import { createSlice } from "@reduxjs/toolkit";

let friendsState = [];
let pendingFriendsState = [];
let onlineUsers = [];

export const pendingFriendsSlice = createSlice({
    name: "pendingFriends",
    initialState: pendingFriendsState,
    reducers: {
        pendingFriends: (state, action) => {
            state = state.push({ ...state, ...action.payload.data})
        }
    }
})
export const { pendingFriends } = pendingFriendsSlice.actions;
export default pendingFriendsSlice.reducer