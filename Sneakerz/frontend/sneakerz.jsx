import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store"
import { signin } from "./util/session_api_util"
import Root from "./components/root"


document.addEventListener("DOMContentLoaded", () => {
    let store = configureStore();
    const root = document.getElementById("root")

    // test app
    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch; 

    window.signin = signin; 

    ReactDOM.render(<Root store={store} />, root);
    //ReactDOM.render(<h1>Here it is </h1>, root)
})