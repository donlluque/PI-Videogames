import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllVideogames } from '../../redux/actions.js';
import Loader from "../Loader/Loader.jsx";
import ResetButton from '../Button/ResetButton.jsx';
import CreateButton from '../Button/CreateButton.jsx';
import Pagination from '../Pagination/Pagination.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import Filters from '../Filter/Filter.jsx';
import Notvideogame from '../Notvideogame/Notvideogame';
import ExitButton from '../Button/ExitButton';
import ContactButton from '../Button/ContactButton';
import "./Home.css";


export default function Home () {

    const dispatch = useDispatch();
	const allVideogames = useSelector((state) => state.videogamesCopy);
	let [loading, setLoading] = useState(true);


	useEffect(() => {

		const getGames =  async () =>{
			await dispatch(getAllVideogames())
			setLoading(false)
		}
		getGames()	

	},[dispatch]);

	if (allVideogames.length ===0 && !loading) {
		return <Notvideogame />
	}

	return loading ? ( 
    <Loader/>
    ) : (
		<>

			<div className='container-home'>
				<ExitButton />
				<ResetButton />
				<CreateButton />
				<ContactButton />
				<SearchBar />
			</div>
				<Filters />


			<Pagination videogames={allVideogames} />

		</>
	);
	
};