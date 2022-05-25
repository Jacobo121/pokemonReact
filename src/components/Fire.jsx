import React from "react";
import Pokebola from "./Pokebola";
import { pokemonData } from "../pokemonInfo";

const Fire = () => {
  return (
    <div>
      {pokemonData.fire.map((item) => (
        <Pokebola name={item.pokemonName} avatar={item.avatar} />
      ))}
    </div>
  );
};

export default Fire;
