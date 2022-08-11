import React from "react";
import { useHistory } from "react-router-dom";
import "./ContactButton.css";

function ContactButton() {
	const history = useHistory();

	return (
		<div>
			<button className="contactbutton" type='button' onClick={() => history.push('/contact')}>👨🏻‍💻 CONTACT</button>
		</div>
	);
}

export default ContactButton;
