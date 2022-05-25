import React from "react";
import Pokebola from "./Pokebola";
import { pokemonData } from "../pokemonInfo";

const Rock = () => {
  return (
    <div>
      {pokemonData.rock.map((item) => (
        <Pokebola name={item.pokemonName} avatar={item.avatar} />
      ))}
    </div>
  );
};

export default Rock;
