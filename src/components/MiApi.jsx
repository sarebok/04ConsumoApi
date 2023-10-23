import React from "react";
import "./MyCard";
import { useEffect } from "react";

const MiApi = ({ setRickAndMortyData }) => {
  useEffect(() => {
    getRickAndMortyData();
  }, []);
  async function getRickAndMortyData() {
    try {
      /*       const url = "https://rickandmortyapi.com/api/character/?page=1";
      const res = await fetch(url);
      const data = await res.json();
      setRickAndMortyData(data.results); */

      //quiero tener todos los personajes de la api para poder hacer una busqueda entretenida
      let characters = [];
      let nextPageUrl = "https://rickandmortyapi.com/api/character";
      while (nextPageUrl) {
        const response = await fetch(nextPageUrl);
        const data = await response.json();
        characters = characters.concat(data.results);
        nextPageUrl = data.info.next;
      }
      setRickAndMortyData(characters);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="api-div">
      <h1>Personajes</h1>
      {/* <MyCard rmCardData={filterInput ? rmFilteredData : rickAndMortyData} /> */}
      {/* <MyCard rmCardData={rickAndMortyData.filter((character) => character.name.includes(filterInput))} setFilterCounter={setFilterCounter} /> */}
    </div>
  );
};

export default MiApi;
