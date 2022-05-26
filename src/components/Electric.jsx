import React from "react";
import Pokebola from "./Pokebola";
import { pokemonData } from "../pokemonInfo";
import "../styles/pokeBolaStyles.css";

const Electric = () => {
  return (
    <div className="container">
      {pokemonData.electric.map((item) => (
        <Pokebola name={item.pokemonName} avatar={item.avatar} />
      ))}
    </div>
  );
};

export default Electric;
