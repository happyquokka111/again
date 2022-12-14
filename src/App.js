import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar.js";
import About from "./Components/About.js";
import Work from "./Components/Work.js";
import { Link } from "react-router-dom";
import Iterative from "./Components/Kara.js";
import Persona from "./Components/Persona.js";
import Home from "./Components/Home.js";
import Eyetracking from "./Components/Eyetracking.js";
import Fleek from "./Components/Fleek.js";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useRef } from "react";

function App() {
  // const scrollToSect = (el) => {
  //   window.scrollTo({
  //     top: el.current.offsetTop,
  //     behavior: "smooth",
  //   });
  // };
  // const home = useRef(null);
  // const about = useRef(null);
  // const work = useRef(null);
  return (
    <div className="App">
      <div className="header"></div>
      {/* <div className="top">
        {<img className="name" src={require("./logo2.png")} width="7%"></img>}

        <div className="nav">
          <Navbar
            scrollToSect={scrollToSect}
            home={home}
            about={about}
            work={work}
          ></Navbar>
        </div>
      </div> */}
      <Router>
        <Routes>
          <Route path="again/" element={<Home />} />
          <Route path="iterative" element={<Iterative />} />
          <Route path="pers" element={<Persona />} />
          <Route path="eye" element={<Eyetracking />} />
          <Route path="fleek" element={<Fleek />} />
        </Routes>
      </Router>
      {/* <div className="container">
        <div ref={home} className="container" id="descript">
          <h5>Hi, my name is</h5>

          <h1>Natalee Amhaz</h1>
          <h6>UX Designer // Developer </h6>
        </div>
        <div ref={about} className="container" id="ab">
          <About />
        </div>
        <div ref={work} className="container" id="work">
          <Work />
        </div>
      </div> */}
    </div>
  );
}

export default App;
