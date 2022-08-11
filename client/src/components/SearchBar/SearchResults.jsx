import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getGameName, clearSearch} from "../../redux/actions";
import Pagination from "../Pagination/Pagination";
import Loader from '../Loader/Loader';
import SearchBar from './SearchBar';
import ResetButton from '../Button/ResetButton.jsx';
import BackButton from '../Button/BackButton.jsx';
import HomeButton from '../Button/HomeButton.jsx';
import CreateButton from '../Button/CreateButton.jsx';
import Error404 from '../Error404/Error404';
import { clearFilter } from '../../redux/actions';
import Filters from '../Filter/Filter.jsx';



export default function SearchResults() {
    const { name }= useParams();
	const dispatch = useDispatch();
	const videogames = useSelector((state) => state.searchVideogame);
	const searchedVideogames = useSelector((state) => state.searchVideogameCopy);
    const [currentPage, setCurrentPage] = useState(1);
    const errors = ['Error', 'SequelizeDatabaseError'];


	useEffect(() => {
        dispatch(clearFilter())
        setCurrentPage(1)
		dispatch(getGameName(name));
        return () => { dispatch(clearSearch()) }
	}, [dispatch, name]);


    if(!searchedVideogames.length){
        return <Loader/>
    }
    if (errors.includes(searchedVideogames)){
        return <Error404 /> 
    }
    return (
        <div>

            <div className='container-home' >
                <HomeButton/>
                <BackButton/>
                <ResetButton />
                <CreateButton/>
                <SearchBar />
            </div>

            <Filters />

            <Pagination videogames={searchedVideogames} />

        </div>
    );
};