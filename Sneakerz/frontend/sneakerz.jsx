import React from "react";
import ReactDOM from "react-dom";
import signin from "./util/session_api_util"

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    window.signin() = signin;

    ReactDOM.render(<h1> Finally made it </h1>, root)
}) 