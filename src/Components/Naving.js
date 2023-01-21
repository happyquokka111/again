import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";


const Naving = (props) => {
  const { scrollToSect, home, about, work } = props;

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">

  <ul class="navbar-nav">
          <li onClick={() => scrollToSect(home)} class="nav-item active">
            <Link class="nav-link" to="/">
              Home <span class="sr-only"></span>
            </Link>
          </li>
          <li onClick={() => scrollToSect(about)} class="nav-item">
            <Link class="nav-link" href="#">
              About
            </Link>
          </li>
          <li onClick={() => scrollToSect(work)} class="nav-item">
            <Link class="nav-link" href="#">
              My Work
            </Link>
          </li>
          </ul>
          </div>
          </nav>
  );
};

export default Naving;
