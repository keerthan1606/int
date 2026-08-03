import React from "react";
import "./Project.css";

// Import images
import weatherImg from "../../assets/wap.jpg";
import shoppingImg from "../../assets/sap.jpg";
import socialImg from "../../assets/cap.jpg";

export default function Project() {
  const projects = [
    {
      id: 1,
      title: "Weather App",
      description: "Real-time weather dashboard using OpenWeather API",
      tags: ["React", "API"],
      image: weatherImg,
    },
    {
      id: 2,
      title: "Online Shopping App",
      description: "A responsive shopping application with a wide range of products.",
      tags: ["React", "E-Commerce"],
      image: shoppingImg,
    },
    {
      id: 3,
      title: "Social Communication App",
      description: "A real-time communication platform connecting users across different locations.",
      tags: ["React", "Chat", "WebSocket"],
      image: socialImg,
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <img src={project.image} alt={`${project.title} screenshot`} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
            <div className="project-links">
              <a href="#" className="btn">Live Demo</a>
              <a href="#" className="btn github-btn">GitHub</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
