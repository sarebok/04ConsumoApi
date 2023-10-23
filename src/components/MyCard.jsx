import React from "react";

const MyCard = ({ rmCardData }) => {
  return (
    <div>
      {" "}
      MyCard
      {rmCardData.map(({ id, name }) => (
        <p key={id}>{name}</p>
      ))}
    </div>
  );
};

export default MyCard;
