import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import GameCard from "../GameCard/GameCard.jsx";
import "./Pagination.css";


export const renderData = (videogame) => {

	return videogame.map((game) => {
		return (
			<div key={game.id} >
				<Link className='text-link' to={"/videogames/" + game.id} >
					<GameCard name={game.name} image={game.image} genres={game.genres} />
				</Link>
			</div>
		);
	});

};

export default function Pagination({ videogames }) {
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setitemsPerPage] = useState(15);
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = videogames.slice(indexOfFirstItem, indexOfLastItem);


	const handleClick = (e) => {
		setCurrentPage(Number(e.target.id));
		window.scrollTo(0,0)
	};

	const handleNext = () => {
		setCurrentPage(currentPage + 1);
		window.scrollTo(0,0)
	};

	const handlePrev = () => {
		setCurrentPage(currentPage - 1);
		window.scrollTo(0,0)
	};

	const pages = [];
	for (let i = 1; i <= Math.ceil(videogames.length / itemsPerPage); i++) {
		pages.push(i);
	};

	return (
		<>
			<div className="cardGrid">{renderData(currentItems)}</div>
			<div className="container-buttons">
				<ul >
					<button
						className="paginated-buttons"
						onClick={handlePrev}
						disabled={currentPage === pages[0] ? true : false}>
						&lt;
					</button>
					{pages.map((number) => {
						return (
							<button
								className="paginated-buttons"
								key={number}
								onClick={handleClick}
								id={number}>
								{number}
							</button>
						);
					})}
					<button
						className="paginated-buttons"
						onClick={handleNext}
						disabled={currentPage === pages[pages.length - 1] ? true : false}>
						&gt;
					</button>
				</ul>
			</div>
		</>
	);
};
