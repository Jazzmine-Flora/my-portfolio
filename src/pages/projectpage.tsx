import React from "react";

const projects = [
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
  // Add more projects here as you build them!
];

const ProjectPage: React.FC = () => (
  <div className="project-page" style={{ maxWidth: 800, margin: "40px auto" }}>
    <h1 style={{ color: "#d72660", textAlign: "center" }}>My Projects</h1>
    <div>
      {projects.map((project, idx) => (
        <div
          key={idx}
          style={{
            background: "#fff0f6",
            borderRadius: 16,
            padding: 24,
            marginBottom: 24,
            boxShadow: "0 2px 8px #ffd1dc33",
          }}
        >
          <h2 style={{ color: "#d72660" }}>{project.title}</h2>
          <p>{project.description}</p>
          <div style={{ marginBottom: 8 }}>
            {project.tech.map((t) => (
              <span
                key={t}
                style={{
                  background: "#ffd1dc",
                  color: "#d72660",
                  borderRadius: 8,
                  padding: "2px 10px",
                  marginRight: 8,
                  fontSize: "0.95em",
                }}
              >
                {t}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#d72660",
              textDecoration: "underline",
              fontWeight: "bold",
            }}
          >
            Link to my Project
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default ProjectPage;