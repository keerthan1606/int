import React from "react";
import "./hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <h1>Hi, I'm Keerthan 👋</h1>
      <p>I'm a passionate Web Developer from Bengaluru.</p>
      <div className="hero-button">
        <a href="#projects">View My Work</a>
        <a href="#contact">Contact Me</a>
      </div>
    </section>
  );
}
