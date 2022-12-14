import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
  const { scrollToSect, home, about, work } = props;

  return (
    <nav className="navbar navbar-expand-lg navbar-light p-3">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li onClick={() => scrollToSect(home)} className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only"></span>
            </a>
          </li>
          <li onClick={() => scrollToSect(about)} className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li onClick={() => scrollToSect(work)} className="nav-item">
            <a className="nav-link" href="#">
              My Work
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
