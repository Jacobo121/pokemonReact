import "../../styles/navigationStyles.css";
import React from "react";

const Navigation = ({ pokeFn, num, type }) => {
  const objBg = {
    fire: "red",
    water: "blue",
    rock: "gray",
    electric: "yellow",
  };

  return (
    <React.Fragment>
      <button
        onClick={() => pokeFn(num)}
        style={{ backgroundColor: objBg[type] }}
        className="button fire "
      >
        {type}
      </button>
    </React.Fragment>
  );
};

export default Navigation;
