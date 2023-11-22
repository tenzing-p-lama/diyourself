import React from "react";
import "./NavBar.scss";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  return (
    <div className={location.pathname === "/" ? "navbar" : "navbar-top"}>
      <nav className="nav">
        <Link to="/">
          <h1 className="nav-logo">Logo</h1>
        </Link>
        <Link to="/projects">Projects</Link>
        <p>search bar</p>
        <p>saved projects</p>
      </nav>
    </div>
  );
};

export default NavBar;
