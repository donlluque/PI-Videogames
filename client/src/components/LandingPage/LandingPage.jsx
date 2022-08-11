import React from "react";
import { Link } from "react-router-dom";
import './LandingPage.css'



export default function LandingPage(){
    return (
        <div className="body" >
            <h1 className="h1" >WELCOME</h1>
            <Link to = '/home'>
                <button className="button" >INSERT COIN 🪙</button>
            </Link>
            <h2 className="h2" >Henry Videogames</h2>
           
        </div>

    );

};