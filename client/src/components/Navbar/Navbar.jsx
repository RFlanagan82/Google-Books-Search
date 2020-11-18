import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <i className="fas fa-book fa-2x"></i>
      <Link to="/" className="navbar-brand">
      &nbsp; - My Google Books Library
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <NavLink to="/" className="nav-link">
           Search
          </NavLink>
          <Link to="/Saved" className="nav-link">
           Saved
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;