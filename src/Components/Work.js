import React, { useState } from "react";
import { Link } from "react-router-dom";
import karaImage from "../kara.png";
import newImage from "../new.png";
import testImage from "../test.png";
import persImage from "../pers.png";
import "./Work.css";

const Work = () => {
  const [hoveredBox, setHoveredBox] = useState(null);

  const projects = [
    { id: 'karakare', image: karaImage, title: 'KaraKare', tech: 'HTML, JavaScript, and Firebase', link: '/iterative' },
    { id: 'fleek', image: newImage, title: 'Fleek', tech: 'Figma', link: '/fleek' },
    { id: 'eyetracking', image: testImage, title: 'Eye Tracking', tech: 'Figma and Python', link: '/eye' },
    { id: 'personas', image: persImage, title: 'Personas and Storyboarding', tech: 'Figma', link: '/pers' }
  ];

  return (
    <div className="work">
      <h1>Featured Work</h1>
      <div className="grid-container">
        {projects.map((project) => (
          <div
            key={project.id}
            className="grid-item"
            onMouseOver={() => setHoveredBox(project.id)}
            onMouseOut={() => setHoveredBox(null)}
          >
            <Link to={project.link}>
              <img src={project.image} alt={project.title} />
            </Link>
            {hoveredBox === project.id && (
              <div className="hover-info">
                <h3>{project.title}</h3>
                <h6>{project.tech}</h6>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;