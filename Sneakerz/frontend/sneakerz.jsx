import React from "react";
import ReactDOM from "react-dom";

import { login } from "./util/session_api_util"

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    window.login = login;

import { signup } from "./util/session_api_util"
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    let store = configureStore();
    const root = document.getElementById("root");
    console.log("store: ", store)
    window.signup = signup;
    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;


    ReactDOM.render(<h1> Finally made it </h1>, root)
}) 