import React from "react";

const MyCard = ({ rmCardData }) => {
  return (
    <div className="cards-container">
      {rmCardData.map(({ id, name, image }) => (
        <div key={id} className="card-div">
          <p>{name}</p>
          <img src={image} alt="" />
        </div>
      ))}
    </div>
  );
};

export default MyCard;
