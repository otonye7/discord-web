import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/userSlice";
import pendingFriendsReducer from "./redux/pendingFriendsSlice";
import friendsReducer from "./redux/friendSlice";
import onlineUsersReducer from "./redux/onlineUserSlice";
import chosenChatReducer from "./redux/chatSlice";
import chatTypeReducer from "./redux/chatTypeSlice";


export const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chosenChatReducer,
    chatType: chatTypeReducer,
    pendingFriends: pendingFriendsReducer,
    friends: friendsReducer,
    onlineUser: onlineUsersReducer
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
       <App />
  </BrowserRouter>
  </Provider>
);


