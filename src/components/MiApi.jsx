import React from "react";
import "./MyCard";
import { useEffect } from "react";

const MiApi = ({ setRickAndMortyData }) => {
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    getRickAndMortyData(signal);

    //cleanup
    return () => {
      controller.abort();
    };
  }, []);

  async function getRickAndMortyData(signal) {
    try {
      //quiero tener todos los personajes de la api para poder hacer una busqueda entretenida
      let characters = [];
      let nextPageUrl = "https://rickandmortyapi.com/api/character";
      while (nextPageUrl) {
        const response = await fetch(nextPageUrl, { signal });
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
    </div>
  );
};

export default MiApi;
