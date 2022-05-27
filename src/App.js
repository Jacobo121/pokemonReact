import "./App.css";
import Navigation from "./components/navigation/Navigation";
import { useState } from "react";
import { pokemonData } from "./pokemonInfo";
import Fire from "./components/Fire";

function App() {
  const [poke, setPoke] = useState(
    <h1 className="title">Presiona un boton</h1>
  );
  const arrOfKey = Object.keys(pokemonData);

  const handlerPoke = (num) => {
    console.log(num)
    if (num === 0) {
      setPoke(<Fire element={pokemonData.fire}  type={arrOfKey[num]} />);
    } else if (num === 1) {
      setPoke(<Fire element={pokemonData.water} type={arrOfKey[num]} />);
    } else if (num === 2) {
      setPoke(<Fire element={pokemonData.rock} type={arrOfKey[num]} />);
    } else if (num === 3) {
      setPoke(<Fire element={pokemonData.electric} type={arrOfKey[num]} />);
    }
  };

  return (
    <div className="App">
      <div>
        <img
          src="https://images.wikidexcdn.net/mwuploads/esssbwiki/thumb/7/77/latest/20111028181540/TituloUniversoPok%C3%A9mon.png/550px-TituloUniversoPok%C3%A9mon.png"
          alt=""
        />
      </div>
      {
        arrOfKey.map((type, num) => 
          <Navigation 
            pokeFn={handlerPoke}
            type={type}
            num={num}
          />
        )
      }
      {poke}
    </div>
  );
}

export default App;
