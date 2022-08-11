import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { clearFilter } from '../../redux/actions';
import "./BackButton.css";


function BackButton() {
	const history = useHistory();

	const dispatch = useDispatch();

	function handleClear(e) {
		dispatch(clearFilter());
		history.goBack()
	}

	return (
		<div>
			<button className="backbutton" type="button" onClick={(e) => handleClear(e)}>👈🏽 BACK</button>
		</div>
	);
}

export default BackButton;
