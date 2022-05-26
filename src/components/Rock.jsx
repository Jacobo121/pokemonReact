import React from "react";
import Pokebola from "./Pokebola";
import { pokemonData } from "../pokemonInfo";
import '../styles/pokeBolaStyles.css';


const Rock = () => {
  return (
    <div className="container">
      {pokemonData.rock.map((item) => (
        <Pokebola key={item.id} name={item.pokemonName} avatar={item.avatar} />
      ))}
    </div>
  );
};

export default Rock;
