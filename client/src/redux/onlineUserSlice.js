import { createSlice } from "@reduxjs/toolkit";

let onlineUsersState = [];

export const onlineUsersSlice = createSlice({
    name: "onlineUser",
    initialState: onlineUsersState,
    reducers: {
        onlineUser: (state, action) => {
            state = state.push(action.payload)
        }
    }
})
export const { onlineUser } = onlineUsersSlice.actions;
export default onlineUsersSlice.reducer