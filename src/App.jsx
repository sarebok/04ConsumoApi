import { useState } from "react";
import "./App.css";
import "./components/MiApi";
import "./components/Buscador";
import MiApi from "./components/MiApi";
import Buscador from "./components/Buscador";

function App() {
  return (
    <>
      <h1>App</h1>
      <MiApi />
      <Buscador />
    </>
  );
}

export default App;
