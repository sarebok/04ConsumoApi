import React from "react";
import { useState, useEffect } from "react";

const AgrupaPersonajes = ({ rmDataConVersiones, setPersonajesUnificados }) => {
  const [dict, setDict] = useState([]);
  const [key, setKey] = useState([]);

  const getFirstName = (object) => {
    const fullName = object.name;
    const separateNames = fullName.split(" ");
    const firstName = separateNames[0];
    return firstName;
  };
  const createDict = (characterArray) => {
    const dictArray = [];
    let mainCharName = "";
    characterArray.forEach((character) => {
      mainCharName = getFirstName(character);

      if (!dictArray.includes(mainCharName)) {
        dictArray.push(mainCharName);
      }
    });
    setDict(dictArray);
  };

  const unificarPersonajes = () => {
    const unifiedArray = [];
    let unifiedChars = [];

    for (let i = 0; i < dict.length; i++) {
      unifiedChars = rmDataConVersiones.filter((char) => char.name.includes(dict[i]));
      let id = i;
      unifiedArray.push({ id: id++, name: dict[i], chars: unifiedChars });
    }
    setPersonajesUnificados(unifiedArray);
  };

  useEffect(() => {
    createDict(rmDataConVersiones);
    unificarPersonajes();
  }, [rmDataConVersiones]);

  return <div>AgrupaPersonajes</div>;
};
export default AgrupaPersonajes;
