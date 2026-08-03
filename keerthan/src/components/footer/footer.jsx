import React from "react";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <p>&copy; {year} Keerthan | Built with React</p>
      <nav>
        <a href="https://github.com/keerthan1606" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/keerthan-s-gowda-5521aa381/" target="_blank" rel="noreferrer">LinkedIn</a>
      </nav>
    </footer>
  );
}
