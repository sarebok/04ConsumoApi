import { useState } from "react";
import "./App.css";
import "./components/MiApi";
import "./components/Buscador";
import MiApi from "./components/MiApi";
import Buscador from "./components/Buscador";

function App() {
  const [filterInput, setFilterInput] = useState("");
  console.log("filterinput app: ", filterInput);
  return (
    <>
      <h1>App</h1>
      <Buscador setFilterInput={setFilterInput} filterInput={filterInput} />
      <MiApi filterInput={filterInput} />
    </>
  );
}

export default App;
