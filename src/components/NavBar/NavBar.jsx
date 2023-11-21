import React from "react";
import "./NavBar.scss";
// import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <nav className="nav">
        <h1 className="nav-logo">Logo</h1>
        <p>plans</p>
        <p>searcch bar</p>
        <p>saved projects</p>
      </nav>
    </div>
  );
}

export default NavBar;
