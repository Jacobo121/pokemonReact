import Pokebola from "./Pokebola";
import React from "react";
import { pokemonData } from "../pokemonInfo";

const Water = () => {
  return (
    <div>
      {pokemonData.water.map((item) => (
        <Pokebola name={item.pokemonName} avatar={item.avatar} />
      ))}
    </div>
  );
};

export default Water;
