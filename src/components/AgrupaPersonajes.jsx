import React from "react";
import { useState, useEffect } from "react";

const AgrupaPersonajes = ({ rmDataConVersiones, setPersonajesUnificados }) => {
  const [dict, setDict] = useState([]);
  const [key, setKey] = useState([]);

  const getFirstName = (object) => {
    const fullName = object.name;
    const separateNames = fullName.split(" ");
    let firstName = separateNames[0];
    const lastTwoChars = firstName.slice(firstName.length - 2);
    const lastThreeChars = firstName.slice(firstName.length - 3);
    const lastFourChars = firstName.slice(firstName.length - 4);
    if (lastTwoChars === "'s") {
      firstName = firstName.slice(0, firstName.length - 2);
    }
    if (lastThreeChars === "Mr.") {
      firstName = fullName;
    }
    if (lastFourChars === "Mrs.") {
      firstName = fullName;
    }
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
    const dictionary = [...dict];
    for (let i = 0; i < dictionary.length; i++) {
      unifiedChars = rmDataConVersiones.filter((char) => char.name.includes(dictionary[i]));
      let id = i;
      unifiedArray.push({ id: id++, name: dict[i], chars: unifiedChars });
    }
    setPersonajesUnificados(unifiedArray);
  };

  useEffect(() => {
    createDict(rmDataConVersiones);
  }, [rmDataConVersiones]);
  useEffect(() => {
    unificarPersonajes();
  }, [dict]);

  return <div>AgrupaPersonajes</div>;
};
export default AgrupaPersonajes;
