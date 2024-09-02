import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h1 className="title">About Me</h1>
      <div className="content">
        <div className="image-container">
          <img className="profile-image" src={require("../mr.png")} alt="Profile" width={"30%"} />
        </div>
        <div className="about-text">
          <p>
            I am a Brown University alum with bachelor degrees in Computer Science and
            Contemplative Studies (a major that consists of neuroscience, psychology, and philosophy courses). I am a NY based software engineer passionate about technology and the impact it has on people's lives.
            <br />
            Always on the lookout for some cool projects, let me know of any!
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
