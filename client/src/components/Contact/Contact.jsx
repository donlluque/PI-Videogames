import React from "react";
import linkedin from "../../../src/img/linkedin.png";
import github from "../../../src/img/github.png";
import email from "../../../src/img/email.png";
import HomeButton from "../Button/HomeButton";
import BackButton from "../Button/BackButton";
import ResetButton from "../Button/ResetButton";
import CreateButton from "../Button/CreateButton";
import SearchBar from "../SearchBar/SearchBar";
import "./Contact.css";

export default function Contact() {
	return (
		<div>
			<div className="container-contact">
				<HomeButton />
				<BackButton />
				<ResetButton />
				<CreateButton />
				<SearchBar />
			</div>
			<div className="container-links">
				<div>
					<img className="github-logo" src={github} alt="img not found" />
					<h3
						className="github"
						href="https://github.com/donlluque"
						target="_blank"
						rel="noreferrer noopener">
						https://github.com/donlluque/
					</h3>
				</div>
				<div>
					<img className="linkedin-logo" src={linkedin} alt="img not found" />
					<h3
						href="https://www.linkedin.com/in/donlluque/"
						target="_blank"
						rel="noreferrer noopener">
						https://www.linkedin.com/in/donlluque/
					</h3>
				</div>
				<div>
					<img className="email-logo" src={email} alt="img not found" />
					<h3
						href="donlluque@gmail.com/"
						target="_blank"
						rel="noreferrer noopener">
						donlluque@gmail.com/
					</h3>
				</div>
			</div>
		</div>
	);
}
