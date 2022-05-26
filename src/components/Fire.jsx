import React from "react";
import Pokebola from "./Pokebola";
import { pokemonData } from "../pokemonInfo";
import '../styles/pokeBolaStyles.css';

const Fire = () => {
  return (
    <div className="container">
      {pokemonData.fire.map((item) => (
        <Pokebola key={item.id} name={item.pokemonName} avatar={item.avatar} />
      ))}
    </div>
  );
};

export default Fire;
