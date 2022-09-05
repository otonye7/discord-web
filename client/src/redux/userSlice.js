import { createSlice } from "@reduxjs/toolkit";

let userState

if(window.localStorage.getItem("discord")){
    userState = JSON.parse(window.localStorage.getItem("discord"))
} else {
    userState = null
}

export const userSlice = createSlice({
    name: "user",
    initialState: userState ? userState : null,
    reducers: {
        loginUser: (state, action) => {
            state = { ...state, ...action.payload.data }
        },
        logoutUser: (state, action) => {
            
        }
    }
})

export const { loginUser, logoutUser } = userSlice.actions
export default userSlice.reducer