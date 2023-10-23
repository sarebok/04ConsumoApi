import React from "react";
import { useState, useEffect } from "react";

const MiApi = ({ filterInput }) => {
  useEffect(() => {
    getRickAndMortyData();
  }, []);
  const [rickAndMortyData, setRickAndMortyData] = useState([]);
  const [rmFilteredData, setRmFilteredData] = useState(rickAndMortyData);
  async function getRickAndMortyData() {
    try {
      const url = "https://rickandmortyapi.com/api/character";
      const res = await fetch(url);
      const data = await res.json();
      setRickAndMortyData(data.results);
    } catch (error) {
      console.log(error);
    }
  }
  console.log("filterinput api: ", filterInput);
  /* useEffect(() => setRmFilteredData([{ id: 1, name: filterInput }]), []); */
  useEffect(() => {
    setRmFilteredData(rickAndMortyData.filter((character) => character.name.includes(filterInput)));
  }, [filterInput]);
  console.log("****************************************************", rmFilteredData);
  return (
    <div className="api-div">
      <h1>esta es la api</h1>
      <div>
        {rmFilteredData.map(({ id, name }) => (
          <p key={id}>{name}</p>
        ))}
      </div>
    </div>
  );
};

export default MiApi;
