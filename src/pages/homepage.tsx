import React from "react";
import profilePic from "../assets/profile.png"; // Change filename if needed
import "../styles/main.css";

const HomePage: React.FC = () => (
  <div className="homepage">
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <img
        src={profilePic}
        alt="Taliba Sadiq"
        style={{
          width: 140,
          height: 140,
          borderRadius: "50%",
          border: "4px solid #ffd1dc",
          boxShadow: "0 4px 16px #ffd1dc55",
          marginBottom: 24,
        }}
      />
      <h1 style={{ fontFamily: "'Pacifico', cursive", color: "#d72660" }}>
        Taliba Sadiq
      </h1>
      <h2 style={{ color: "#d72660", fontWeight: 400, marginTop: 0 }}>
        Front-End Developer & Blogger
      </h2>
      <p style={{ maxWidth: 500, margin: "20px auto", color: "#555" }}>
        Hi! I’m Taliba, a passionate front-end developer who loves building beautiful, user-friendly web experiences. I enjoy working with React, TypeScript, JavaScript, and CSS, and I’m always learning new things. Welcome to my portfolio!
      </p>
      <div style={{ marginTop: 24 }}>
        <a
          href="https://github.com/Jazzmine-Flora"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            margin: "0 12px",
            color: "#d72660",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/taliba-sadiq"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            margin: "0 12px",
            color: "#d72660",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          LinkedIn
        </a>
      </div>
    </div>
  </div>
);

export default HomePage;