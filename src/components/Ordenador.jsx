import React, { useState, useEffect } from "react";

const Ordenador = ({ rmDataConVersiones, setRmOrderedData }) => {
  const [sortMethod, setSortMethod] = useState("");

  useEffect(() => {
    let newArray = [...rmDataConVersiones];
    if (sortMethod === "versiones") {
      newArray.sort((a, b) => b.chars.length - a.chars.length);
    }
    if (sortMethod === "id") {
      newArray.sort((a, b) => a.chars[0].id - b.chars[0].id);
    }
    setRmOrderedData(newArray);
  }, [sortMethod, rmDataConVersiones]);

  return (
    <div className="ordenador">
      <p>ordenar por:</p>
      <button onClick={() => setSortMethod("versiones")}>Multiversiones</button>
      <button onClick={() => setSortMethod("id")}>Id original</button>
    </div>
  );
};

export default Ordenador;
