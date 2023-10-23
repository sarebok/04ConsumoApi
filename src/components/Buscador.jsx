import React, { useState } from "react";

const Buscador = ({ setFilterInput, filterInput }) => {
  console.log("filterinput buscador ", filterInput);
  return (
    <div>
      <input type="text" placeholder="filtro" onChange={(e) => setFilterInput(e.target.value)} value={filterInput} />
    </div>
  );
};

export default Buscador;
