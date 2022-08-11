import React from "react";
import { Link } from "react-router-dom";
import "./CreateButton.css";

function CreateButton() {


	return (
		<div>
			<Link to='/videogames/create'>    
				<button className="createbutton">🎨 CREATE</button>
			</Link>                
		</div>
	);
}

export default CreateButton;
