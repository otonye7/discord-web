import { createSlice } from "@reduxjs/toolkit";

let onlineUsersState = [];

export const onlineUsersSlice = createSlice({
    name: "onlineUser",
    initialState: onlineUsersState,
    reducers: {
        onlineUser: (state, action) => {
            state = state.push(...action.payload.data)
            console.log(state)
        }
    }
})
export const { onlineUser } = onlineUsersSlice.actions;
export default onlineUsersSlice.reducer