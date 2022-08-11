import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByGenre, filterByOrigin, OrderByName, OrderByRating, getAllGenres, 
	filterByPlatforms, getAllPlatforms } from '../../redux/actions';
import ClearFilters from '../Button/ClearFilters';
import "./Filter.css";


export default function Filters () {

	const dispatch = useDispatch();
	const genres = useSelector((state) => state.genres);
    const platforms = useSelector((state) => state.platforms);
    const [currentPage, setCurrentPage] = useState(1);
    const [order, setOrder] = useState('')


    useEffect(() => {
        if(genres.length < 1){
            dispatch(getAllGenres())
        }
        if(platforms.length < 1){
            dispatch(getAllPlatforms())
        }
    },[dispatch, genres, platforms])

    function handleSortName(e) {
        e.preventDefault();
        dispatch(OrderByName(e.target.value));
        setCurrentPage(1)
        setOrder(`Ordered ${e.target.value}`)
    };

    function handleSortRating(e) {
        e.preventDefault();
        dispatch(OrderByRating(e.target.value));
        setCurrentPage(1)
        setOrder(`Ordered ${e.target.value}`)
    };

    function handleFilterOrigin(e) {
        e.preventDefault();
        dispatch(filterByOrigin(e.target.value));
        setCurrentPage(1)
    };

    function handleFilterGenre(e) {
        e.preventDefault();
        dispatch(filterByGenre(e.target.value));
        setCurrentPage(1)
    };

    function handleFilterPlatform(e) {
        e.preventDefault();
        dispatch(filterByPlatforms(e.target.value));
        setCurrentPage(1)
    };

    return (
        <div className='all-container'>
            <ClearFilters />

			<div>
				<select className='filters-container' name="filters" onChange={e => handleSortName(e)} defaultValue="default">
					<option disabled value="default">
						Order by Name...
					</option>
                    <option value="all">All Videogames</option>
					<option value="asc">from A → Z</option>
					<option value="des">from Z → A</option>
				</select>
			</div>

			<div >
				<select className='filters-container' name="filters" onChange={e => handleSortRating(e)} defaultValue="default">
					<option disabled value="default">
						Order by Rating...
					</option>
                    <option value="all">All Videogames</option>
					<option value="high">High Rating</option>
					<option value="low">Low Rating</option>
				</select>
			</div>

			<div >
				<select className='filters-container' name="filters" onChange={e => handleFilterOrigin(e)} defaultValue="default">
					<option disabled value="default">
						Filter by Origin...
					</option>
					<option value="all">All Videogames</option>
					<option value="api">Videogames from API</option>
					<option value="created">Videogames from DB</option>
				</select>
			</div>

			<div >
				<select className='filters-container' name="filters" onChange={e => handleFilterGenre(e)} defaultValue="default">
					<option className='filters-container' disabled value="default">
						Filter by Genres...
					</option>
                    <option value="all">All Videogames</option>
					{
					genres.map((genre) => (
					<option key={genre.id} value={genre.name} >{genre.name}</option>
					))}
				</select>
			</div>

            <div >
				<select className='filters-container' name="filters" onChange={e => handleFilterPlatform(e)} defaultValue="default">
					<option disabled value="default">
						Filter by Platforms...
					</option>
                    <option value="all">All Videogames</option>
					{
					platforms.map((platform) => (
					<option key={platform.id} value={platform.name} >{platform.name}</option>
					))}
				</select>
			</div>
		</div>
    );

};