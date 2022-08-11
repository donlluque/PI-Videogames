import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { hasSpecialChars } from '../GameCreate/validators.js';
import "./SearchBar.css";


export default function SearchBar (){
    const [name, setName] = useState('');
    const[allowButton, setAllowButton] = useState(true);

    function handleInputChange (e) {
        if(!hasSpecialChars(e.target.value)){
            setName(e.target.value)
            setAllowButton(false)
        } 
    };

    function handleSubmit (e) {
        e.preventDefault();
        setName('');
    };
    
    return (
        <div>
            <form className="form" onSubmit={(e) => handleSubmit(e)}>

                <input className='search-form'value={name} type='text' placeholder='Search for a videogame...' onChange={(e) => handleInputChange(e)}/>
                
                <Link to={name.trim() !== '' ? `/results/${name}` : '#'}>
                <button className='search-btn' type='submit' disable={allowButton.toString()}>🔍</button>
               
                </Link>
            </form>

        </div>
    )
};

