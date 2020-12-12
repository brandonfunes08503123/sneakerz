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
        <Link to="/" className="nav-logo">
          S N E A K E R Z
        </Link>
        <Link to="/" className="nav-item">
          Discover
        </Link>
        <Link to="/" className="nav-item">
          Styles
        </Link>
        <Link to="/login" className="nav-item">
          Sign In
        </Link>
        <Link to="/signup" className="nav-item">
          Sign Up
        </Link>
      </div>
    );
  };

  console.log(`Current User: ${JSON.stringify(currentUser)}`);
  return currentUser === undefined ? loggedOut() : loggedIn();
};

export default Navbar;
