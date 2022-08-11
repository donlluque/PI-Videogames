import React from 'react';
import imgdefault from '../../../src/img/imgdefault.jpg'
import './GameCard.css'


export default function GameCard ({ name, image, genres }) {
    
    return (
        <div className='container'>
            <h1 className='title' > 🕹️ {name}</h1>
            <img className='image' src={image? image : imgdefault} alt='img not found' />
            <h3 className='genre'>{genres.map((genre, id) => <span key={id}> {genre.name} </span>)}</h3>
            
        </div>
    );

};
