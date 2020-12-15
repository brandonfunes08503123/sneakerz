import React from "react";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { MdDehaze } from "react-icons/md";

const Navbar = ({ currentUser, logout, openModal }) => {
  const loggedIn = () => {
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
        <button className="nav-item nav-button" onClick={() => logout()}>
          Sign Out
        </button>
        <button
          className="nav-item nav-icon"
          onClick={() => openModal("search")}
        >
          <IoSearchOutline size={18} />
        </button>
        <button className="nav-icon">
          <MdDehaze size={18} />
        </button>
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
        <button
          className="nav-item nav-icon"
          onClick={() => openModal("search")}
        >
          <IoSearchOutline size={24} />
        </button>
        <button className="nav-icon">
          <MdDehaze size={24} />
        </button>
      </div>
    );
  };

  // console.log(`Current User: ${JSON.stringify(currentUser)}`);
  return currentUser === undefined ? loggedOut() : loggedIn();
};

export default Navbar;
