import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <header>
      <h1>Rick & Morty</h1>
    </header>
    <App />
    <footer>
      <p>Gary Gutierrez</p>
    </footer>
  </React.StrictMode>
);
