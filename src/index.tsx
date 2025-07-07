import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom"; // Change this line
import App from "./App";
import "./styles/main.css";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <HashRouter> {/* Change this line */}
      <App />
    </HashRouter>
  </React.StrictMode>
);