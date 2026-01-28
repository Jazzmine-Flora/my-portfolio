import React from "react";
import githubIcon from "../assets/social.png";
import linkedinIcon from "../assets/linkedin.png";
import "./Footer.css";

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer__inner container">
      <p className="footer__copy">
        © {new Date().getFullYear()} Taliba Sadiq. All rights reserved.
      </p>
      <div className="footer__social" aria-label="Social links">
        <a
          href="https://www.linkedin.com/in/taliba-sadiq"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
          aria-label="LinkedIn"
        >
          <img className="footer__icon" src={linkedinIcon} alt="" />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://github.com/Jazzmine-Flora"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
          aria-label="GitHub"
        >
          <img className="footer__icon" src={githubIcon} alt="" />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
