import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-logo">
          <h2>KSG.</h2>
          <p>Building responsive and modern web experiences.</p>
        </div>

        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          <a
            href="https://github.com/keerthan1606"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/keerthan-s-gowda-5521aa381/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © {currentYear} Keerthan S Gowda . All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer; //footer.jsx