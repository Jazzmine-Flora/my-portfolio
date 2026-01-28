import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";

const AboutPage: React.FC = () => (
  <div className="about-page page-content">
    <section className="section">
      <div className="container about__inner">
        <h1 className="about__title">About Me</h1>
        <div className="about__grid">
          <div className="about__block">
            <p className="about__lead">
              Hello! I'm <strong className="about__name">Taliba Sadiq</strong>, a software engineer with a strong foundation in both technology and business.
            </p>
            <p>
              I completed my software engineering training at <strong>TripleTen</strong> and hold a bachelor's degree in business.
              My unique background allows me to approach problems with both technical expertise and a strategic mindset.
            </p>
          </div>
          <div className="about__block">
            <p>
              In addition to my professional pursuits, I have a passion for <strong>animation</strong>, which inspires my creativity and attention to detail in all my projects.
            </p>
          </div>
        </div>

        <h2 className="about__subtitle">Featured Projects</h2>
        <ul className="about__list">
          <li className="about__item">
            <strong>Expense Tracker:</strong> Built with <strong>React</strong> and <strong>TypeScript</strong>. Helps users manage and visualize daily expenses with an intuitive, user-friendly interface.
          </li>
          <li className="about__item">
            <strong>Girly Blog:</strong> Full-stack project with <strong>React</strong> front end and <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong> back end. A personal blogging platform for sharing and managing content.
          </li>
        </ul>
        <p className="about__closing">
          Both projects showcase my proficiency in modern web technologies and my commitment to building tools that are practical and engaging.
        </p>
        <div className="about__cta">
          <Link to="/projects" className="btn btn--primary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;
