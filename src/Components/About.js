import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h1 className="title">A bit about me...</h1>
      <div className="content">
        <div className="image-container">
          <img className="profile-image" src={require("../me.png")} alt="Profile" width={"30%"} />
        </div>
        <div className="about-text">
          <p>
            I'm a NYC-based software engineer and a Brown University alum with degrees in Computer Science and
            Contemplative Studies. I'm passionate about the intersection of technology, product, and the human experience.
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
