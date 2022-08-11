import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import BackButton from '../Button/BackButton.jsx';
import HomeButton from '../Button/HomeButton.jsx';
import { getAllGenres, getAllPlatforms, postNewGame } from '../../redux/actions.js';
import { validate } from "./validators";
import { getAllVideogames } from '../../redux/actions.js';
import './GameCreate.css'

export default function GameCreate() {

    const dispatch = useDispatch();
    const platforms= useSelector((state)=>state.platforms)
    const genres = useSelector((state)=>state.genres)
    const history = useHistory();
    const [error, setError] = useState({});
    let [button, setButton] = useState({});


    const [input, setInput] = useState({
        name: '',
        rating: 0,
        released: '',
        image: '',
        genres: [],
        platforms: [],
        description: '',
    });

    useEffect(() => {
        dispatch(getAllPlatforms());
        dispatch(getAllGenres());
    }, [dispatch])

    useEffect(() => {
        input.name &&
        input.description &&
        //input.rating &&
        input.released &&
        input.platforms.length &&
        input.genres.length ? 
        setButton(false) :
        setButton(true)
    },[input])

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value,
        });
        setError(validate({
            ...input,
            [e.target.name] : e.target.value 
        }))
    };

    function handleGenres(e) {

        let selection = e.target.name
        let allSelections = [...input[selection]];
        if(allSelections.includes(e.target.value)){
            alert('Please don`t repeat videogames Genres')
        }
        setInput({
            ...input,
            genres: [...new Set([...input.genres, e.target.value])],
        });
        
        setError(validate({
            ...input,
            genres : [...input.genres, e.target.value] 
        }))
    };

    function handlePlatforms(e) {

        let selection = e.target.name
        let allSelections = [...input[selection]];
        if(allSelections.includes(e.target.value)){
            alert('Please don`t repeat videogames Platforms')
        }

        setInput({
            ...input,
            platforms: [...new Set([...input.platforms, e.target.value])],
        });
        
        setError(validate({
            ...input,
            platforms : [...input.platforms, e.target.value] 
        }))
    };

    function handleSubmit(e) {
        e.preventDefault()
        console.log('hola soy el boton')
        setError(validate(input))
        if (Object.keys(error).length && input.name){
            return alert('You still have required inputs to complete');
        } else {           
            dispatch (postNewGame (input));
            alert ('Game successfully created');
            setInput ({
                name: '',
                rating: 0,
                released: '',
                image: '',
                genres: [],
                platforms: [],
                description: '',
            });
            dispatch(getAllVideogames())
            history.push('/home');
        };
    };

    return (
		<div>
            <br />
            <br />
            <h1 className='create-title'>🎮 Create</h1>
            <h1 className='create-title'>Videogame</h1>
            <br />
            <br />
            
            <div className='home-back-buttons'>
                <HomeButton/>
                <BackButton/>
                <br/>
                <br/>
                <br/>
                <br/>
                <button className='create-button' disabled={button} onClick={(e) => handleSubmit(e)} type='submit'>👾 CREATE VIDEOGAME</button>
            </div>

           <form className='form-container' onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>Name </label>
                    <br/>
                    <input type='text' placeholder='Name your Videogame' name='name' value={input.name} onChange={handleChange}></input>
                    {error.name && (<p className='error'><small>{error.name}</small></p>)}
                    <br/>

                    {/*==========================================================================================*/}
                    <label>Rating </label>
                    <br/>
                    {error.rating && (<p className="error"><small>{error.rating}</small></p>)}
                    <input name='rating' value={input.rating} type='number' step='0.01' min='0' max='5' default='0' onChange={handleChange}/>
                    <br/>

                    {/*==========================================================================================*/}
                    <label>Date Released </label>
                    <br/>
                    <input name='released' value={input.released} type='date' onChange={handleChange}></input>
                    {error.released && (<p className='error'><small>{error.released}</small></p>)}
                    <br/>

                    {/*==========================================================================================*/}
                    <label>Image </label>
                    <br/>
                    <textarea name='image' placeholder='Copy/Paste the URL of an image' value={input.image} type='text' cols='59' onChange={handleChange}></textarea>
                    {error.image && (<p className='error'><small>{error.image}</small></p>)}
                    <br/>

                    {/*==========================================================================================*/}
                    <label>Platforms </label>
                    <br/>
                    <select className='filters-form' name='platforms' defaultValue='At least one' onChange={handlePlatforms}>
                        <option disabled value='At least one'>At least one Platform</option>
                    {
                        platforms.map((platform) => (
                            <option key={platform.id} value={platform.name} >{platform.name}</option>
                            ))}
                    </select>
                    <select className='filters-form' name='platforms' defaultValue='At least one' onChange={handlePlatforms}>
                        <option disabled value='At least one'>At least one Platform</option>
                    {
                        platforms.map((platform) => (
                            <option key={platform.id} value={platform.name} >{platform.name}</option>
                            ))}
                    </select>
                    <select className='filters-form' name='platforms' defaultValue='At least one' onChange={handlePlatforms}>
                        <option disabled value='At least one'>At least one Platform</option>
                    {
                        platforms.map((platform) => (
                            <option key={platform.id} value={platform.name} >{platform.name}</option>
                            ))}
                    </select>
                    {error.platforms && (<p className='error'><small>{error.platforms}</small></p>)}
                    <br/>

                    {/*==========================================================================================*/}
                    <label>Genres </label>
                    <br/>
                    <select className='filters-form' name='genres' defaultValue='At least one' id='0' onChange={handleGenres}>
                        <option disabled value='At least one'>At least one Genre</option>
                    {
                        genres.map((genre) => (
                            <option key={genre.id} value={genre.name} >{genre.name}</option>
                            ))}
                    </select>
                    <select className='filters-form' name='genres' defaultValue='At least one' id='1' onChange={handleGenres}>
                        <option disabled value='At least one'>At least one Genre</option>
                    {
                        genres.map((genre) => (
                            <option key={genre.id} value={genre.name} >{genre.name}</option>
                            ))}
                    </select>
                    <select className='filters-form' name='genres' defaultValue='At least one' id='2' onChange={handleGenres}>
                        <option disabled value='At least one'>At least one Genre</option>
                    {
                        genres.map((genre) => (
                            <option key={genre.id} value={genre.name} >{genre.name}</option>
                            ))}
                    </select>
                    {error.genres && (<p className='error'><small>{error.genres}</small></p>)}
                    <br/>

                    {/*==========================================================================================*/}
                    <label>Description</label>
                    <br/>
                    <textarea name='description' placeholder='Write your Videogame description...' value={input.description} type='text' rows='6' cols='59' onChange={handleChange}></textarea>
                    {error.description && (<p className='error'><small>{error.description}</small></p>)}
                    <br/>

                </div>
            </form>
        </div>
        
    );

};