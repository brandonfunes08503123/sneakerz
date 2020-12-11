import React from "react";
import { Link } from "react-router-dom";

/**
 * Navbar should render the same links whether or not
 * they're logged in or not.
 *
 * Actually, I don't think that's true
 *
 *  if logged in, show sign out button
 *  if logged out, show in button
 *
 *  everything else stays the same
 */

const Navbar = ({ currentUser, logout }) => {
  console.log(`Logout: ${logout}`);

  const loggedIn = () => {
    return (
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">SNEAKERZ</Link>
        </div>
        <div>
          <Link to="/">Discover</Link>
          <Link to="/">
            <button onClick={() => logout()}>Sign Out</button>
          </Link>
        </div>
      </div>
    );
  };

  const loggedOut = () => {
    return (
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">SNEAKERZ</Link>
        </div>
        <div className="nav-items">
          <Link to="/">Discover</Link>
          <Link to="/">Styles</Link>
          <Link to="/login">Sign In</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    );
  };

  console.log(`Current User: ${JSON.stringify(currentUser)}`);
  return currentUser === undefined ? loggedOut() : loggedIn();
};

export default Navbar;
