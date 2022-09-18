import { createSlice } from "@reduxjs/toolkit";

let pendingFriendsState = [];

export const pendingFriendsSlice = createSlice({
    name: "pendingFriends",
    initialState: pendingFriendsState,
    reducers: {
        pendingFriends: (state, action) => {
            state = state.push(...action.payload.data)
        }
    }
})
export const { pendingFriends } = pendingFriendsSlice.actions;
export default pendingFriendsSlice.reducer