import React, { useState } from "react";
import "./NavBar.scss";
import { NavLink, Link, useLocation } from "react-router-dom";
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
        <NavLink to="/">
          <h1 className="nav-logo">Logo</h1>
        </NavLink>

        <section className="nav-menu">
          <div className="hamburgerMenu" onClick={toggleHamburger}>
            <Hamburger isOpen={hamburger} />
          </div>

          <ul className={hamburger ? "nav-links" : "nav-links__close"}>
            {/* <li
              className={`nav-link ${
                location.pathname === "/projects" ? "active" : ""
              }`}
            > */}
            <Link
              to="/projects"
              className={`nav-link ${
                location.pathname === "/projects" || "/projects/:id"
                  ? "active"
                  : ""
              }`}
            >
              Projects
            </Link>

            <li className="nav-link">search bar</li>

            <li className="nav-link">saved projects</li>
          </ul>
        </section>
      </nav>
    </div>
  );
};

export default NavBar;
