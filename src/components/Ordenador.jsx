import React from "react";
import { useState, useEffect } from "react";

const Ordenador = ({ rmDataConVersiones, setRmOrderedData }) => {
  //obtiene candidad de veces en que el nombre del personaje existe en otros elementos de la data
  //este valor lo inyectare en cada personaje de la data original
  //luego, usare ese nuevo elemento de cada personaje para ordenar

  /* setRmOrderedData(rmDataConVersiones.sort((a, b) => a.versiones < b.versiones)); */
  setRmOrderedData(rmDataConVersiones.sort((a, b) => a.chars.length < b.chars.length));

  return <div>Ordenador</div>;
};

export default Ordenador;
