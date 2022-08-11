import React from "react";
import { useHistory } from "react-router-dom";
import "./HomeButton.css";

function HomeButton() {
	const history = useHistory();

	return (
		<div>
			<button className="homebutton" type='button' onClick={() => history.push('/home')}>🏠 HOME</button>
		</div>
	);
}

export default HomeButton;
