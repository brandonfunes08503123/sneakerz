import React from "react";
import { Switch, Route } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import SplashContainer from "./splash/splash_container";
import ModalContainer from "./modal/modal_container";
import NavbarContainer from "./navbar/navbar_container";
import SneakerContainer from "./sneakers/sneaker_container";
import SneakersContainer from "./sneakers/sneakers_container";
import SearchItemsContainer from "./search_items/search_items_container";
import Checkout from "./checkout/checkout";

const App = () => (
  <div className="app-container">
    <ModalContainer />
    <Route path="/" component={NavbarContainer} />
    <Switch>
      <Route path={`/sneakers/:skuId/preCheckout/`} component={Checkout} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Route path="/search" component={SearchItemsContainer} />
      <Route path={`/sneakers/:skuId`} component={SneakerContainer} />
      <Route path="/sneakers" component={SneakersContainer} />
      <Route path="/" component={SplashContainer} />
    </Switch>
  </div>
);

export default App;
