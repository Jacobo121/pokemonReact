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
        onClick={() => pokeFn({ num })}
        style={{ backgroundColor: objBg[type] }}
        className="button fire "
      >
        {type}
      </button>

      {/* <button className='button water' onClick={() => pokeFn(2)} >Water</button>
            <button className='button rock' onClick={() => pokeFn(3)} >Rock</button>
            <button className='button electric' onClick={() => pokeFn(4)} >Electric</button> */}
    </React.Fragment>
  );
};

export default Navigation;
