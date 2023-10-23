import { useState } from "react";
import "./App.css";
import "./components/MiApi";
import "./components/Buscador";
import MiApi from "./components/MiApi";
import Buscador from "./components/Buscador";
import MyCard from "./components/MyCard";
import Ordenador from "./components/Ordenador";

function App() {
  const [rickAndMortyData, setRickAndMortyData] = useState([]);
  const [rmFilteredData, setRmFilteredData] = useState([]);
  const [filteredCounter, setFilteredCounter] = useState(rickAndMortyData.length);
  const [rmOrderedData, setRmOrderedData] = useState([]);
  console.log("log en app: ", rmOrderedData);
  return (
    <>
      <Ordenador rickAndMortyData={rickAndMortyData} setRmOrderedData={setRmOrderedData} />
      <Buscador rickAndMortyData={rmOrderedData} setRmFilteredData={setRmFilteredData} filteredCounter={filteredCounter} />
      <MiApi setRickAndMortyData={setRickAndMortyData} />
      <MyCard rmCardData={rmFilteredData.length > 0 ? rmFilteredData : rmOrderedData} setFilteredCounter={setFilteredCounter} />
    </>
  );
}

export default App;
