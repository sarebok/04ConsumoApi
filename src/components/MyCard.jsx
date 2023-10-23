import React from "react";
import { useEffect } from "react";

const MyCard = ({ rmCardData, setFilteredCounter }) => {
  useEffect(() => {
    setFilteredCounter(rmCardData.length);
  }, [rmCardData]);

  const characterVersions = (characterName) => {
    const str = characterName;
    const words = str.split(" ");
    const firstWord = words[0];
    return rmCardData.filter((character) => character.name.includes(firstWord)).length;
  };

  return (
    <div className="cards-container">
      {rmCardData.map(({ id, name, image }) => (
        <div key={id} className="card-div">
          <img src={image} alt="" />
          <div className="card-text">
            <p className="id">{id}.- </p>
            <p className="name">{name}</p>
          </div>
          <p className="Versions">versiones: {characterVersions(name)}</p>
        </div>
      ))}
    </div>
  );
};

export default MyCard;
