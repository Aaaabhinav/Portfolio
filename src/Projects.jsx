import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import projectsData from "./projectsData";

function Projects() {
  return (
    <motion.div
      className="Projects"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1>Projects</h1>
      <hr />

      {projectsData.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          points={project.points}
          link={project.link}
          index={index}
        />
      ))}
    </motion.div>
  );
}

export default Projects;
