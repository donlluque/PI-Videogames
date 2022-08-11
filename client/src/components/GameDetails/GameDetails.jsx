import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getGameId, clearDetail } from '../../redux/actions.js';
import Loader from '../Loader/Loader.jsx';
import Error404 from '../Error404/Error404.jsx';
import BackButton from '../Button/BackButton.jsx';
import HomeButton from '../Button/HomeButton.jsx';
import imgdefault from '../../../src/img/imgdefault.jpg'
import './GameDetails.css'


export default function GameDetails (props) {

    const dispatch = useDispatch();
    const game = useSelector((state) => state.gameDetails)
	const errors = ['Error', 'SequelizeDatabaseError'];

    useEffect(() => {
        dispatch(getGameId(props.match.params.id));
        return () => dispatch(clearDetail());
    },[dispatch, props.match.params.id]);
    

    if(!game.length){
        return <Loader/>
    }
    if (errors.includes(game)){
        return <Error404 /> 
    }

    return (

        <div className="container-details">
            <div className="detail-buttons">
                <HomeButton/>
                <BackButton/>
                <h1>{game[0].name}</h1>
            </div>

            <div className="details" >
                <div className="basic-details">
                    <img src={game[0].image? game[0].image : imgdefault} alt='img not found' />
                   
                    <h3>ID: {game[0].id}</h3>
                    
                    <h3>Released: <br/>🗓️{game[0].released}</h3>
                    
                    <h3>Rating: <br/>⭐{game[0].rating}</h3>
                    
                    <h3>Platforms: <br/>{game[0].platforms.map(platform => '🕹️'+platform.name + ' ')}</h3>
                    
                    <h3>Genres: <br/>{game[0].genres.map(genre => '👾' + genre.name + ' ')}</h3>
                   
                </div>
                <div className='details-text'>
                    <h3>DESCRIPTION
                        <br/>
                        <br/>
                        {game[0].description} </h3>
                </div>
            </div>
        </div>
    );
};
