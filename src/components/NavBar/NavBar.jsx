import React, { useState } from "react";
import "./NavBar.scss";
import { Link, useLocation } from "react-router-dom";
import Hamburger from "../Hamburger/Hamburger";

const NavBar = () => {
  const location = useLocation();

  const [hamburger, setHamburger] = useState(false);
  const toggleHamburger = () => {
    setHamburger(!hamburger);
  };

  return (
    <div className={location.pathname === "/" ? "navbar" : "navbar-top"}>
      <nav className="nav">
        <Link to="/">
          <h1 className="nav-logo">Logo</h1>
        </Link>

        <ul className={hamburger ? "nav-links" : "nav-links__close"}>
          <li className="nav-link">
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
          </li>

          <li className="nav-link">
            <p>search bar</p>
          </li>

          <li className="nav-link">
            <p>saved projects</p>
          </li>
        </ul>

        <div className="hamburger" onClick={toggleHamburger}>
          <Hamburger isOpen={hamburger} />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
