import React from "react";
import "./About.css";
const About = () => {
  
  return (
    <div className="about">
      <h1>About Me</h1>
      <img id="im" src={require("../me.jpeg")} width="30%"></img>
      <p>
        I am a Brown University alum with bachelor degrees in Computer Science and
        Contemplative Studies (a major that consists of neuroscience, psychology, and philosophy courses). I am a NY based software engineer passionate about technology and the impact it has on people's lives.
        <br/>
         Always on the look at for some cool projects, let me know of any!
      </p>
    </div>
  );
};
export default About;
