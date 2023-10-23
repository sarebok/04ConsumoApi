import { useState, useEffect } from "react";
import "./App.css";
import "./components/MiApi";
import "./components/Buscador";
import MiApi from "./components/MiApi";
import Buscador from "./components/Buscador";
import MyCard from "./components/MyCard";
import Ordenador from "./components/Ordenador";
import AgregaVersiones from "./components/AgregaVersiones";
import AgrupaPersonajes from "./components/AgrupaPersonajes";

function App() {
  const [rickAndMortyData, setRickAndMortyData] = useState([]);
  const [rmDataConVersiones, setRmDataConVersiones] = useState([]);
  const [rmFilteredData, setRmFilteredData] = useState([]);
  const [filteredCounter, setFilteredCounter] = useState(rickAndMortyData.length);
  const [rmOrderedData, setRmOrderedData] = useState([]);
  const [personajesUnificados, setPersonajesUnificados] = useState([]);

  console.log("ordered", rmOrderedData);
  console.log("unificados", personajesUnificados);
  return (
    <>
      <MiApi setRickAndMortyData={setRickAndMortyData} />
      <AgregaVersiones rickAndMortyData={rickAndMortyData} setRmDataConVersiones={setRmDataConVersiones} />
      <AgrupaPersonajes rmDataConVersiones={rmDataConVersiones} setPersonajesUnificados={setPersonajesUnificados} />
      <Ordenador rmDataConVersiones={personajesUnificados} setRmOrderedData={setRmOrderedData} />
      <Buscador rickAndMortyData={rmOrderedData} setRmFilteredData={setRmFilteredData} filteredCounter={filteredCounter} />
      <MyCard rmCardData={rmFilteredData.length > 0 ? rmFilteredData : rmOrderedData} setFilteredCounter={setFilteredCounter} />
    </>
  );
}

export default App;
