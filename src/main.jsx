import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
      <header>
        <h1 className="main-title">Rick & Morty</h1>
      </header>
      <App />
      <footer>
        <p>Gary Gutierrez</p>
      </footer>
    </div>
  </React.StrictMode>
);
