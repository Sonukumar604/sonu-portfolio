import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "CampusConnect (Full-Stack Platform)",
    description:
      "A complete college student platform with user management, internships, hackathons, scholarships, JWT auth, admin dashboards & more.",
    tech: ["Java", "Spring Boot", "MySQL", "React"],
    link: "https://github.com/sonu/CampusConnect",
  },
  {
    title: "Portfolio Website",
    description:
      "A sleek personal portfolio built using React, animations, glass UI, and responsive design.",
    tech: ["React", "CSS3", "Framer Motion"],
    link: "https://github.com/sonu/portfolio",
  },
  {
    title: "DSA Practice Repository",
    description:
      "Contains 400+ optimized solutions of Data Structures & Algorithms (Java) including DP, Trees, Graphs, Sliding Window, Binary Search.",
    tech: ["Java", "DSA"],
    link: "https://github.com/sonu/DSA",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="project-tech">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-item">{t}</span>
              ))}
            </div>

            <a className="project-link" href={project.link} target="_blank">
              View Code →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
