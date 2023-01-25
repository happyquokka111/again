import React from "react";
import { useState } from "react";

import "./Work.css";
import { Link } from "react-router-dom";

const Work = () => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div className="work">
      <h1>Featured Work</h1>
    
        <div
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          class="box box1"
          id="box"
        >
          <Link to="/iterative">
            <img
              src={require("../kara.png")}
              width="500"
              height="250"
              alt="karakare"
            ></img>
          </Link>
          {isHovering && (
            <div>
              <h3>KaraKare</h3>
              <h6>HTML, JavaScript, and Firebase</h6>
            </div>
          )}
        </div>
        <div
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          class="box box2"
          id="box"
        >
          <Link to="/fleek">
            <img src={require("../new.png")} width="500" height="250"></img>
          </Link>
          {isHovering && (
            <div>
              <h3>Fleek</h3>
              <h6>Figma</h6>
            </div>
          )}
        </div>

  

        <div
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          class="box box3"
          id="box"
        >
          <Link to="/eye">
            <img src={require("../test.png")} width="500" height="250"></img>
          </Link>
          {isHovering && (
            <div>
              <h3>Eye Tracking</h3>
              <h6>Figma and Python</h6>
            </div>
          )}
        </div>
        <div
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          class="box box4"
          id="box"
        >
          <Link to="/pers">
            <div>
              <img src={require("../pers.png")} width="500" height="250"></img>
            </div>
          </Link>

          {isHovering && (
            <div>
              <h3>Personas and Storyboarding</h3>
              <h6>Figma</h6>
            </div>
          )}
        </div>
 
    </div>
  );
};

export default Work;
