import "./MyCard";
import { useState, useEffect } from "react";

const Buscador = ({ rickAndMortyData, setRmFilteredData, filteredCounter }) => {
  const [filterInput, setFilterInput] = useState("");

  useEffect(() => {
    setRmFilteredData(rickAndMortyData.filter((character) => character.name.toLowerCase().includes(filterInput.toLowerCase())));
  }, [filterInput]);

  return (
    <div className="filter-container">
      <input
        className="busca-nombre"
        type="text"
        placeholder="Escribe un nombre para buscar"
        value={filterInput}
        onChange={(e) => setFilterInput(e.target.value)}
      />
      <p>personajes encontrados: {filteredCounter}</p>
    </div>
  );
};

export default Buscador;
