import Pokebola from "./Pokebola";
import React from "react";
import { pokemonData } from "../pokemonInfo";
import '../styles/pokeBolaStyles.css';


const Water = () => {
  return (
    <div className="container">
      {pokemonData.water.map((item) => (
        <Pokebola key={item.id} name={item.pokemonName} avatar={item.avatar} />
      ))}
    </div>
  );
};

export default Water;
