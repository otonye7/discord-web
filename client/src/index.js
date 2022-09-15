import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/userSlice";
import pendingFriendsReducer from "./redux/friendsSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    pendingFriends: pendingFriendsReducer
  }
})

let storeRef = store;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
       <App />
  </BrowserRouter>
  </Provider>
);

export default storeRef