import React from "react";
import "./about.css";
import profileImg from "../../assets/keerthan.jpg";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Left side - profile image */}
        <div className="about-image">
          <img src={profileImg} alt="Keerthan S Gowda" />
        </div>

        {/* Right side - text content */}
        <div className="about-content">
          <h2>Hi, I'm Keerthan S Gowda 👋</h2>
          <p>
            I'm a passionate Web Developer from Bangalore who enjoys creating
            modern, responsive, and user-friendly websites using the latest web
            technologies.
          </p>
          <p>
            My primary skills include <strong>HTML, CSS, JavaScript, React, and Node.js</strong>.
            I enjoy learning new technologies and building projects that solve
            real-world problems.
          </p>
          <p>
            My goal is to become a <strong>Full Stack Developer</strong> and contribute to impactful
            software products while continuously improving my development skills.
          </p>

          {/* Personal details */}
          <ul className="about-details">
            <li><strong>Name:</strong> Keerthan S Gowda</li>
            <li><strong>Location:</strong> Bangalore, India</li>
            <li><strong>Role:</strong> Web Developer</li>
            <li><strong>Email:</strong> space6270@gmail.com</li>
          </ul>

          {/* Connect buttons */}
          <div className="about-connect">
            <a href="mailto:space6270@gmail.com" className="btn">Email Me</a>
            <a href="https://www.linkedin.com/in/keerthan-s-gowda-5521aa381/" target="_blank" rel="noreferrer" className="btn">LinkedIn</a>
            <a href="https://github.com/keerthan1606" target="_blank" rel="noreferrer" className="btn">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
