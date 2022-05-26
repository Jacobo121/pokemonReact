import React from 'react';
import '../styles/pokeBolaStyles.css';

const Pokebola = (props) => {
    return (
        <div className='card'>
            <div className='card_img'>
                <img src={props.avatar}  alt=""/>
            </div>
            <h1>{props.name}</h1>
        </div>
    );
}

export default Pokebola;