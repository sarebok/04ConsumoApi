import React from "react";
import { useEffect } from "react";

const MyCard = ({ rmCardData, setFilteredCounter }) => {
  useEffect(() => {
    setFilteredCounter(rmCardData.length);
  }, [rmCardData]);

  return (
    <div className="cards-container">
      {rmCardData.map(({ id, name, image }) => (
        <div key={id} className="card-div">
          <img src={image} alt="" />
          <p>{id}</p>
          <p>{name}</p>
        </div>
      ))}
    </div>
  );
};

export default MyCard;
