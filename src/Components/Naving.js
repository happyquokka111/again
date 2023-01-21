import React from "react";
import "./Navbar.css";
import { Nav, Navbar, NavLink } from "react-bootstrap";

const Naving = (props) => {
  const { scrollToSect, home, about, work } = props;

  return (
    <Navbar collapseOnSelect expand="sm">
      <Navbar.Toggle
        aria-controls="navbarScroll"
        data-bs-target="#navbarScroll"
      />
      <Navbar.Collapse id="navbarScroll">
        <Nav>
          <li onClick={() => scrollToSect(home)} className="nav-item active">
            <Nav.Link className="nav-link" href="#">
              Home <span className="sr-only"></span>
            </Nav.Link>
          </li>
          <li onClick={() => scrollToSect(about)} className="nav-item">
            <Nav.Link className="nav-link" href="#">
              About
            </Nav.Link>
          </li>
          <li onClick={() => scrollToSect(work)} className="nav-item">
            <Nav.Link className="nav-link" href="#">
              Featured Work
            </Nav.Link>
          </li>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

// <navbar className="navbar navbar-expand-lg  p-3">
//     <a class="navbar-brand" href="#">Navbar</a>
//   <button
//     className="navbar-toggler"
//     type="button"
//     data-toggle="collapse"
//     data-target="#navbarNavDropdown"
//     aria-controls="navbarNavDropdown"
//     aria-expanded="false"
//     aria-label="Toggle navigation"
//   >
//     <span class="navbar-toggler-icon"></span>
//   </button>

//   <div className="collapse navbar-collapse" id="navbarNavDropdown">
//     <ul className="navbar-nav">
//     <a class="navbar-brand" href="#">Navbar</a>
//       <li onClick={() => scrollToSect(home)} className="nav-item active">
//         <a className="nav-link" href="#">
//           Home <span className="sr-only"></span>
//         </a>
//       </li>
//       <li onClick={() => scrollToSect(about)} className="nav-item">
//         <a className="nav-link" href="#">
//           About
//         </a>
//       </li>
//       <li onClick={() => scrollToSect(work)} className="nav-item">
//         <a className="nav-link" href="#">
//           My Work
//         </a>
//       </li>
//     </ul>
//   </div>
// </nav>

export default Naving;
