import React from "react";
import "../styles/main.css";

const projects = [
  {
    title: "News Explorer",
    description: "A full-stack news application that allows users to search, save, and manage news articles from various sources.",
    link: "https://jazzmine-flora.github.io/final-project-frontend/",
    tech: ["React", "JavaScript", "CSS", "Node.js", "Express", "MongoDB", "API", "News API"],
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio showcasing my projects and skills.",
    link: "https://jazzmine-flora.github.io/my-portfolio/",
    tech: ["React", "TypeScript", "JavaScript", "CSS"],
  },
  {
    title: "What to Wear App (WTWR)",
    description: "A simple weather application that fetches data from a public API.",
    link: "https://www.wat2wear.twilightparadox.com/",
    tech: ["React", "JavaScript", "CSS", "API", "Weather API", "MongoDB", "Node.js", "Express", "Postman"],
  },
  {
    title: "Expense Tracker",
    description: "A simple app to track your daily expenses with charts and categories.",
    link: "https://jazzmine-flora.github.io/expense-tracker/",
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "JavaScript", "CSS"],
  },
  {
    title: "Girls Blog",
    description: "A personal blog platform with both front-end and back-end, focused on lifestyle and inspiration.",
    link: "https://github.com/Jazzmine-Flora/Girly-Blogspot",
    tech: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "CSS"],
  },
];

const ProjectPage: React.FC = () => (
  <div className="projects-page page-content">
    <section className="section">
      <div className="container">
        <h1 className="projects__title">Projects</h1>
        <p className="projects__lead">
          A selection of things I've built — from full-stack apps to front-end experiences.
        </p>
        <div className="projects__grid">
          {projects.map((project, idx) => (
            <article key={idx} className="project-card">
              <div className="project-card__body">
                <h2 className="project-card__title">{project.title}</h2>
                <p className="project-card__desc">{project.description}</p>
                <div className="project-card__tech">
                  {project.tech.map((t) => (
                    <span key={t} className="project-card__tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link"
              >
                View project
                <span className="project-card__arrow" aria-hidden>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default ProjectPage;
