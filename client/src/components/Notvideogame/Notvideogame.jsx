import {React} from "react";
import notfound from '../../img/notfound.gif'
import CreateButton from '../Button/CreateButton';
import ClearFilters from '../Button/ClearFilters';
import "./Notvideogame.css";




export default function Notvideogame(){

    return (
        <div className="notfound">
            <h1>Sorry, We couldn't find any results</h1>

            <img src={notfound} alt="loading..." />

            <h2>Clear back or create a videogame</h2>

            <div className="notfound-buttons">
                <ClearFilters />
                <CreateButton />
            </div>

        </div>
	);
};