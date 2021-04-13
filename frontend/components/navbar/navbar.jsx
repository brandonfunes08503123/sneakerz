import React from "react";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Navbar = ({ currentUser, logout, openSearchModal }) => {
  const loggedIn = () => {
    return (
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          S N E A K E R Z
        </Link>
        <div className="nav-items-container">
          <Link to="/" className="nav-item">
            Discover
          </Link>
          <Link to="/styles" className="nav-item">
            Styles
          </Link>
          <button className="nav-item nav-button" onClick={() => logout()}>
            Sign Out
          </button>
          <Link to="/cart" className="nav-item">
            <AiOutlineShoppingCart size={24} />
          </Link>
          <button
            className="nav-item nav-icon"
            onClick={() => openSearchModal("search")}
          >
            <IoSearchOutline size={24} />
          </button>
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
        <div className="nav-items-container">
          <Link to="/" className="nav-item">
            Discover
          </Link>
          <Link to="/styles" className="nav-item">
            Styles
          </Link>
          <Link to="/login" className="nav-item">
            Sign In
          </Link>
          <Link to="/signup" className="nav-item">
            Sign Up
          </Link>
          <button
            className="nav-item nav-icon"
            onClick={() => openSearchModal("search")}
          >
            <IoSearchOutline size={24} />
          </button>
        </div>
      </div>
    );
  };

  return currentUser === undefined ? loggedOut() : loggedIn();
};

export default Navbar;
