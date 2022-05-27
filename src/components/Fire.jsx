import React from "react";
import Pokebola from "./Pokebola";
import { pokemonData } from "../pokemonInfo";
import '../styles/pokeBolaStyles.css';

const Fire = ({element, type}) => {
  return (
    <div className="container">
      {pokemonData.fire.map((item) => (
        <Pokebola key={item.id} element={element} type={type}/>
      ))}
    </div>
  );
};

export default Fire;
