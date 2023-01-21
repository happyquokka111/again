import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Naving = (props) => {
  const { scrollToSect, home, about, work } = props;

  return (
    <Navbar bg="white" expand="lg">
      <Navbar.Brand href="#home"> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <li onClick={() => scrollToSect(home)} class="nav-item active">
            <Link class="nav-link" to="/">
              Home <span class="sr-only"></span>
            </Link>
          </li>
          <li onClick={() => scrollToSect(about)} class="nav-item">
            <a class="nav-link" href="#">
              About
            </a>
          </li>
          <li onClick={() => scrollToSect(work)} class="nav-item">
            <a class="nav-link" href="#">
              My Work
            </a>
          </li>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Naving;
