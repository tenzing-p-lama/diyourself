import React, { useState, useEffect } from "react";
import "./NavBar.scss";
import { NavLink, Link, useLocation } from "react-router-dom";
import Hamburger from "../Hamburger/Hamburger";

const NavBar = () => {
  const location = useLocation();

  const [hamburger, setHamburger] = useState(false);
  const toggleHamburger = () => {
    setHamburger(!hamburger);
  };

  useEffect(() => {
    setHamburger(false);
  }, [location.pathname]);

  return (
    <div className={location.pathname === "/" ? "navbar" : "navbar-top"}>
      <nav className="nav">
        <NavLink to="/" className="nav-logo">
          <h1 className="nav-logo nav-logo__text">diy</h1>
        </NavLink>

        <section className="nav-menu">
          <ul className={hamburger ? "nav-links" : "nav-links__close"}>
            <Link
              to="/projects"
              className={`nav-link ${
                location.pathname === "/projects" ? "active" : ""
              }`}
            >
              Projects
            </Link>

            <Link
              to="/projects/saved"
              className={`nav-link ${
                location.pathname === "/project/saved" ? "active" : ""
              }`}
            >
              Saved Projects
            </Link>

            <Link
              to="/upload"
              className={`nav-link ${
                location.pathname === "/upload" ? "active" : ""
              }`}
            >
              Add Project
            </Link>
          </ul>

          <div className="hamburgerMenu" onClick={toggleHamburger}>
            <Hamburger isOpen={hamburger} />
          </div>
        </section>
      </nav>
    </div>
  );
};

export default NavBar;
