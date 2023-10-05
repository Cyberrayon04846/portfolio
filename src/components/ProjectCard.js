import React from "react";
import "../style/ProjectCard.scss";

const ProjectCard = ({ title, description, githubLink, backgroundImage }) => {
  return (
    <div className="project-card" style={{ backgroundImage: `url(${backgroundImage})` }}>
     
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i> View on GitHub
      </a>
    </div>
  );
};

export default ProjectCard;
