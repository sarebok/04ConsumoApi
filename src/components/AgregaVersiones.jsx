import React from "react";
import { useEffect } from "react";

const AgregaVersiones = ({ rickAndMortyData, setRmDataConVersiones }) => {
  const getFirstName = (object) => {
    const fullName = object.name;
    const separateNames = fullName.split(" ");
    const firstName = separateNames[0];
    return firstName;
  };
  const insertElementToCharacter = () => {
    const dataConVersiones = [];
    rickAndMortyData.forEach((character) => {
      const versiones = rickAndMortyData.filter((character) => character.name.includes(getFirstName(character))).length;
      dataConVersiones.push({ ...character, versiones: versiones });
    });
    setRmDataConVersiones(dataConVersiones);
  };

  useEffect(() => {
    insertElementToCharacter();
  }, [rickAndMortyData]);

  return <div>AgregaVersiones</div>;
};

export default AgregaVersiones;
