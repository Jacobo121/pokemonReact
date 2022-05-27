import React from 'react';
import '../styles/pokeBolaStyles.css';

const Pokebola = ({element, type}) => {

    const objClass = {
        fire: "fire",
        water: "water",
        rock: "rock",
        electric: "electric",
      }

    return (
        <div className='card' >
            {
                element.map(item =>
                    <div className={`cardPoke card_${objClass[type]}`}>
                        <div className='card_img'>
                            <img src={item.avatar}  alt=""/>
                        </div>
                        <h1>{item.pokemonName}</h1>
                    </div>
                )
            }
                
        </div>
    );
}

export default Pokebola;