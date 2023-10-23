import React from "react";
import { useState, useEffect } from "react";

const Ordenador = ({ rickAndMortyData, setRmOrderedData }) => {
  //obtiene candidad de veces en que el nombre del personaje existe en otros elementos de la data
  //este valor lo inyectare en cada personaje de la data original
  //luego, usare ese nuevo elemento de cada personaje para ordenar

  const [rmDataConVersiones, setRmDataConVersiones] = useState([]);

  const insertElementToCharacter = () => {
    const dataConVersiones = [];
    rickAndMortyData.forEach((character) => {
      const str = character.name;
      const words = str.split(" ");
      const firstWord = words[0];
      const versiones = rickAndMortyData.filter((character) => character.name.includes(firstWord)).length;
      dataConVersiones.push({ ...character, versiones: versiones });
    });
    setRmDataConVersiones(dataConVersiones);
  };

  useEffect(() => {
    insertElementToCharacter();
  }, [rickAndMortyData]);
  setRmOrderedData(rmDataConVersiones.sort((a, b) => a.versiones < b.versiones));

  return <div>Ordenador</div>;
};

export default Ordenador;
