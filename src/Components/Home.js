import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Naving.js";
import About from "./About.js";
import Work from "./Work.js";
import { useRef } from "react";

function Home() {

  const scrollToSect = (el) => {
    //get height of nav bar
    const navHeight = document.querySelector(".nav").offsetHeight;
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
        {<img className="name" src={require("../logo2.png")}></img>}

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
          <div class="product-engineering">
  <span>product</span>
  <div class="dot"></div>
  <span>engineering</span>
  <div class="dot"></div>
  <span>storytelling</span>
</div>
          <div id="contact" class="contact-icons">
  <a href="https://www.linkedin.com/in/nataleeamhaz" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
  <a href="https://github.com/nataleeamhaz" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>
  <a href="mailto:nataleeamhaz@gmail.com" aria-label="Email"><i class="fas fa-envelope"></i></a>
  <a href="https://twitter.com/nataleeamhaz" target="_blank" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
</div>
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
