import React from "react";
import { useEffect } from "react";

const MyCard = ({ rmCardData, setFilteredCounter }) => {
  useEffect(() => {
    setFilteredCounter(rmCardData.length);
  }, [rmCardData]);

  /* const characterVersions = (characterName) => {
    const str = characterName;
    const words = str.split(" ");
    const firstWord = words[0];
    return rmCardData.filter((character) => character.name.includes(firstWord)).length;
  }; */

  return (
    <div className="cards-container">
      {rmCardData.map(({ id, name, chars }) => (
        <div key={id} className="card-div">
          <img src={chars[0].image} alt="" />
          <div className="card-text">
            <p className="id">{chars[0].id}.- </p>
            <p className="name">agrupado {name}</p>
          </div>
          <p className="name">Nombre char: {chars[0].name}</p>
          <p className="Versions">versiones: {chars.length}</p>
        </div>
      ))}
    </div>
  );
};

export default MyCard;
