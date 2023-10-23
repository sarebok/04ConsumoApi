import React from "react";
import { useEffect } from "react";

const AgregaVersiones = ({ rickAndMortyData, setRmDataConVersiones }) => {
  const insertElementToCharacter = () => {
    const dataConVersiones = [];
    rickAndMortyData.forEach((character) => {
      const fullName = character.name;
      const separateNames = fullName.split(" ");
      const firstName = separateNames[0];
      const versiones = rickAndMortyData.filter((character) => character.name.includes(firstName)).length;
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
