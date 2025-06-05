import React from "react";

const AboutPage = () => (
  <div style={{ maxWidth: 700, margin: "40px auto", background: "#fff0f6", borderRadius: 16, padding: 32, boxShadow: "0 2px 8px #ffd1dc33" }}>
    <h1 style={{ color: "#d72660" }}>About Me</h1>
    <p style={{ fontSize: "1.1em", color: "#555" }}>
      Hello! I’m <b>Taliba Sadiq</b>, a software engineer with a strong foundation in both technology and business.
      I completed my software engineering training at <b>TripleTen</b> and hold a bachelor’s degree in business.
      My unique background allows me to approach problems with both technical expertise and a strategic mindset.
    </p>
    <p style={{ fontSize: "1.1em", color: "#555" }}>
      In addition to my professional pursuits, I have a passion for <b>animation</b>, which inspires my creativity and attention to detail in all my projects.
    </p>
    <h2 style={{ color: "#d72660", marginTop: 32 }}>Featured Projects</h2>
    <ul style={{ listStyle: "'🌸 '", paddingLeft: 24, fontSize: "1.08em" }}>
      <li style={{ marginBottom: 18 }}>
        <b>Expense Tracker:</b> Built using <b>React</b> and <b>TypeScript</b>, this application helps users efficiently manage and visualize their daily expenses. It is designed to be intuitive and user-friendly, making personal finance tracking accessible to everyone.
      </li>
      <li>
        <b>Girly Blog:</b> This full-stack project utilizes <b>React</b> for the front end and <b>Node.js</b> with <b>Express</b> and <b>MongoDB</b> for the back end. It serves as a personal blogging platform, enabling users to share and manage content easily. The project demonstrates my ability to build scalable web applications and work across the entire development stack.
      </li>
    </ul>
    <p style={{ fontSize: "1.1em", color: "#555", marginTop: 32 }}>
      Both projects showcase my proficiency in modern web technologies and my commitment to building tools that are both practical and engaging for users.
    </p>
  </div>
);

export default AboutPage;