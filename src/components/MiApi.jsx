import React from "react";
import { useState, useEffect } from "react";

const MiApi = () => {
  useEffect(() => {
    getRickAndMortyData();
  }, []);
  const [rickAndMortyData, setRickAndMortyData] = useState([]);
  async function getRickAndMortyData() {
    try {
      const url = "https://rickandmortyapi.com/api/character";
      const res = await fetch(url);
      const data = await res.json();
      setRickAndMortyData(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="api-div">
      {/* <div>{console.log(rickAndMortyData.results)}</div> */}
      <h1>esta es la api</h1>
      {rickAndMortyData.results.map(({ id, name }) => (
        <p key={id}>{name}</p>
      ))}
    </div>
  );
};

export default MiApi;
