import React from "react";
import ProjectCard from "./ProjectCard";
import "../style/projects.scss";
import chatImage from "../assests/chatImage.png";
import portfolio from "../assests/portfolio.png";

// Data for the projects
const projectsData = [
  {
    title: "Chat app",
    description: "A chat app where you can discuss about different topics in chat rooms",
    githubLink: "https://github.com/Cyberrayon04846/mychat",
    image: chatImage,
  },
  {
    title: "Personal Portfolio",
    description: "My personal portfolio created using React.js",
    githubLink: "https://github.com/Cyberrayon04846/portfolio",
    image: portfolio,
  },
];

/**
 * Component that renders the projects section.
 */
const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-content">
        <h2>My Work</h2>
        <div className="project-cards">
          {/* Render project cards */}
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              githubLink={project.githubLink}
              backgroundImage={project.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;