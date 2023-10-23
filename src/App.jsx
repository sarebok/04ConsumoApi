import { useState } from "react";
import "./App.css";
import "./components/MiApi";
import "./components/Buscador";
import MiApi from "./components/MiApi";
import Buscador from "./components/Buscador";
import MyCard from "./components/MyCard";

function App() {
  const [rickAndMortyData, setRickAndMortyData] = useState([]);
  const [rmFilteredData, setRmFilteredData] = useState([]);
  const [filteredCounter, setFilteredCounter] = useState(rickAndMortyData.length);

  return (
    <>
      <Buscador rickAndMortyData={rickAndMortyData} setRmFilteredData={setRmFilteredData} filteredCounter={filteredCounter} />
      <MiApi setRickAndMortyData={setRickAndMortyData} />
      <MyCard rmCardData={rmFilteredData.length > 0 ? rmFilteredData : rickAndMortyData} setFilteredCounter={setFilteredCounter} />
    </>
  );
}

export default App;
