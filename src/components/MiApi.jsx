import React from "react";
import "./MyCard";
import { useState, useEffect } from "react";
import MyCard from "./MyCard";

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
  useEffect(() => {
    setRmFilteredData(rickAndMortyData.filter((character) => character.name.includes(filterInput)));
  }, [filterInput]);
  return (
    <div className="api-div">
      <h1>esta es la api</h1>
      <MyCard rmCardData={filterInput ? rmFilteredData : rickAndMortyData} />
    </div>
  );
};

export default MiApi;
