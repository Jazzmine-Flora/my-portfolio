import React from "react";
import { Link } from "react-router-dom";
import { GitHubIcon, LinkedInIcon } from "../components/SocialIcons";
import profilePic from "../assets/profile.png";
import "../styles/main.css";

const HomePage: React.FC = () => (
  <div className="homepage page-content">
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__media">
          <img
            src={profilePic}
            alt="Taliba Sadiq"
            className="hero__image"
          />
        </div>
        <div className="hero__content">
          <p className="hero__greeting">Hi, I'm</p>
          <h1 className="hero__title">Taliba Sadiq</h1>
          <p className="hero__tagline">Front-End Developer & Animator</p>
          <p className="hero__bio">
            I build beautiful, user-friendly web experiences with React, TypeScript, and CSS.
            Passionate about clean code and learning new things. Welcome to my portfolio.
          </p>
          <div className="hero__actions">
            <Link to="/projects" className="btn btn--primary">
              View Projects
            </Link>
            <Link to="/contact" className="btn btn--ghost">
              Get in Touch
            </Link>
          </div>
          <div className="hero__social">
            <a
              href="https://github.com/Jazzmine-Flora"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="GitHub"
            >
              <GitHubIcon className="hero__social-icon" title="GitHub" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/taliba-sadiq"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="hero__social-icon" title="LinkedIn" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default HomePage;
