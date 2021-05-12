import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { AuthRoute } from "../util/route_util";

const LoginFormContainer = React.lazy(() =>
  import("./session_form/login_form_container")
);
// import LoginFormContainer from "./session_form/login_form_container";
const SignupFormContainer = React.lazy(() =>
  import("./session_form/signup_form_container")
);
// import SignupFormContainer from "./session_form/signup_form_container";
const SplashContainer = React.lazy(() => import("./splash/splash_container"));
// import SplashContainer from "./splash/splash_container";
const ModalContainer = React.lazy(() => import("./modal/modal_container"));
// import ModalContainer from "./modal/modal_container";
const NavbarContainer = React.lazy(() => import("./navbar/navbar_container"));
// import NavbarContainer from "./navbar/navbar_container";
const SneakerContainer = React.lazy(() =>
  import("./sneakers/sneaker_container")
);
// import SneakerContainer from "./sneakers/sneaker_container";
const SneakersContainer = React.lazy(() =>
  import("./sneakers/sneakers_container")
);
// import SneakersContainer from "./sneakers/sneakers_container";
const SearchItemsContainer = React.lazy(() =>
  import("./search_items/search_items_container")
);
// import SearchItemsContainer from "./search_items/search_items_container";
const CollectionsContainer = React.lazy(() =>
  import("./collections/collections_container")
);
// import CollectionsContainer from "./collections/collections_container";
const CartContainer = React.lazy(() => import("./cart/cart_container"));
// import CartContainer from "./cart/cart_container";
const Styles = React.lazy(() => import("./styles/styles"));
// import Styles from "./styles/styles";
import Footer from "./footer/footer";

const App = () => (
  <div className="app-container">
    <Suspense fallback={<h1>Loading...</h1>}>
      <ModalContainer />
      <Route path="/" component={NavbarContainer} />
      <Switch>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <Route path="/search" component={SearchItemsContainer} />
        <Route path="/styles" component={Styles} />
        <Route path={`/sneaker/:skuId`} component={SneakerContainer} />
        <Route path="/sneakers/collections" component={CollectionsContainer} />
        <Route path="/sneakers" component={SneakersContainer} />
        <Route path="/cart" component={CartContainer} />
        <Route path="/" component={SplashContainer} />
      </Switch>
      <Route path="/" component={Footer} />
    </Suspense>
  </div>
);

export default App;
