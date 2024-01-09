import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Naving.js";
import About from "./About.js";
import Work from "./Work.js";
import { useRef } from "react";

function Home() {
  //get height of navbar
  const navHeight = document.querySelector(".nav").offsetHeight;
  const scrollToSect = (el) => {
    window.scrollTo({
      top: el.current.offsetTop - navHeight,
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

          <h1>Natalee Amhaz</h1>
          <h6>Product // Engineering </h6>
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
