import { useState, useEffect } from "react";
import "./App.css";
import "./components/MiApi";
import "./components/Buscador";
import MiApi from "./components/MiApi";
import Buscador from "./components/Buscador";
import MyCard from "./components/MyCard";
import Ordenador from "./components/Ordenador";
import AgregaVersiones from "./components/AgregaVersiones";

function App() {
  const [rickAndMortyData, setRickAndMortyData] = useState([]);
  const [rmDataConVersiones, setRmDataConVersiones] = useState([]);
  const [rmFilteredData, setRmFilteredData] = useState([]);
  const [filteredCounter, setFilteredCounter] = useState(rickAndMortyData.length);
  const [rmOrderedData, setRmOrderedData] = useState([]);
  const [reducedData, setReducedData] = useState([]);

  /*   useEffect(() => {
    const uniqueDict = rmOrderedData.reduce((acc, obj) => {
      const firstName = obj.name.split(" ")[0];
      if (!acc[firstName]) {
        acc[firstName] = obj;
      }
      return acc;
    }, {});
    setReducedData(Object.values(uniqueDict));
    console.log("uniquearray", reducedData);
  }, [rmOrderedData]); */

  return (
    <>
      <MiApi setRickAndMortyData={setRickAndMortyData} />
      <AgregaVersiones rickAndMortyData={rickAndMortyData} setRmDataConVersiones={setRmDataConVersiones} />
      <Ordenador rmDataConVersiones={rmDataConVersiones} setRmOrderedData={setRmOrderedData} />
      <Buscador rickAndMortyData={rmOrderedData} setRmFilteredData={setRmFilteredData} filteredCounter={filteredCounter} />
      <MyCard rmCardData={rmFilteredData.length > 0 ? rmFilteredData : rmOrderedData} setFilteredCounter={setFilteredCounter} />
    </>
  );
}

export default App;
