import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const CaseStudyNav = () => (
  <Navbar collapseOnSelect expand="sm">
    <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav>
        <li className="nav-item active">
          <Nav.Link as={Link} to="/">
            Home <span className="sr-only"></span>
          </Nav.Link>
        </li>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default CaseStudyNav;
