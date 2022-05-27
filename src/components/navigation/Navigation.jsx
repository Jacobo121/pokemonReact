import "../../styles/navigationStyles.css";
import React from "react";

const Navigation = ({ pokeFn, num, type }) => {

  const objClass = {
    fire: "fire",
    water: "water",
    rock: "rock",
    electric: "electric",
  }

  return (
    <React.Fragment>
      <button
        onClick={() => pokeFn(num)}
        className={objClass[type]}
      >
        {type}
      </button>
    </React.Fragment>
  );
};

export default Navigation;
