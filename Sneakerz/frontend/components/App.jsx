import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./navbar/navbar_container";
import { AuthRoute } from "../util/route_util";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";

const App = () => (
  <div className="app-container">
    <Navbar />
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;
