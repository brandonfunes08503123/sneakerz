import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import { login, logout, removeErrors } from "./actions/session_actions";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore();
  const root = document.getElementById("root");

  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
      session: { id: window.currentUser.id },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.login = login;
  window.logout = logout;
  window.removeErrors = removeErrors;

  ReactDOM.render(<Root store={store} />, root);
});

/**
 *     test app
 *  window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch; 

    window.login = login; 
 */
