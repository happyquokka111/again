import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar.js";
import About from "./About.js";
import Work from "./Work.js";
import { Link } from "react-router-dom";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRef } from "react";

function Home() {
  const scrollToSect = (el) => {
    window.scrollTo({
      top: el.current.offsetTop,
      behavior: "smooth",
    });
  };
  const home = useRef(null);
  const about = useRef(null);
  const work = useRef(null);
  return (
    <div className="App">
      <div className="top">
        {<img className="name" src={require("../logo2.png")} width="7%"></img>}

        <div className="nav">
          <Navbar
            scrollToSect={scrollToSect}
            home={home}
            about={about}
            work={work}
          ></Navbar>
        </div>
      </div>

      <div className="container">
        <div ref={home} className="container" id="descript">
          <h5>Hi, my name is</h5>

          <h1>[First Name] [Last]</h1>
          <h6>UX Designer // Developer </h6>
        </div>
        <div ref={about} className="container" id="ab">
          <About />
        </div>
        <div ref={work} className="container" id="work">
          <Work />
        </div>
      </div>
    </div>
  );
}

export default Home;
