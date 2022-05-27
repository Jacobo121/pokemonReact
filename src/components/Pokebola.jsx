import React from 'react';
import '../styles/pokeBolaStyles.css';

const Pokebola = ({element, type}) => {

    const objBg = {
        fire: "red",
        water: "blue",
        rock: "gray",
        electric: "yellow"
    }


    return (
        <div className='card' >
            {
                element.map(item =>
                    <div style={{backgroundColor: objBg[type]}}>
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