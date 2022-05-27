import React from "react";
import Pokebola from "./Pokebola";
import '../styles/pokeBolaStyles.css';

const Fire = ({element, type}) => {
  return (
    <div className="container">
        <Pokebola element={element} type={type}/>
    </div>
  );
};

export default Fire;
