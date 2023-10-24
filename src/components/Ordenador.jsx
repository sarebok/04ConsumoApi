import React, { useState, useEffect } from "react";

const Ordenador = ({ rmDataConVersiones, setRmOrderedData }) => {
  const [sortMethod, setSortMethod] = useState("");

  useEffect(() => {
    let newArray = [...rmDataConVersiones];
    if (sortMethod === "masmenos") {
      newArray.sort((a, b) => b.chars.length - a.chars.length);
    }
    if (sortMethod === "menosmas") {
      newArray.sort((a, b) => a.chars.length - b.chars.length);
    }
    setRmOrderedData(newArray);
    console.log("sort2", newArray);
  }, [sortMethod, rmDataConVersiones]);

  return (
    <div>
      <p>ordenar por:</p>
      <button onClick={() => setSortMethod("masmenos")}>Mayor a Menor</button>
      <button onClick={() => setSortMethod("menosmas")}>Menor a Mayor</button>
    </div>
  );
};

export default Ordenador;
