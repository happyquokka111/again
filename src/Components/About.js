import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>

      <img id="im" src={require("../me.jpeg")} width="30%"></img>
      <p>
        I am a junior at Brown University studying Computer Science and
        Contemplative Studies. Previously, I worked as a UX designer at [Company
        Name]. I am passionate about technology and the impact it has on
        people's lives and am always looking to work on new projects!
      </p>
    </div>
  );
};
export default About;
