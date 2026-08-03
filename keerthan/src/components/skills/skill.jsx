import React from "react";
import "./skill.css";

export default function Skill() {
  const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "80%" },
    { name: "JavaScript", level: "75%" },
    { name: "React", level: "60%" },
  ];

  return (
    <section id="skills" className="skill-section">
      <h2 className="section-title">My Skills</h2>
      <div className="skill-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <span>{skill.name}</span>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
