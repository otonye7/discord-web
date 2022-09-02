import { createSlice } from "@reduxjs/toolkit";

let userState

export const userSlice = createSlice({
    name: "user",
    initialState: userState ? userState : null,
    reducers: {
        loginUser: (state, action) => {

        },
        logoutUser: (state, action) => {
            
        }
    }
})

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer