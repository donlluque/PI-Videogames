import React from 'react';
import BackButton from '../Button/BackButton';
import HomeButton from '../Button/HomeButton';
import "./Error404.css";


export default function Error404 () {

	return (
		<div className='error404'>
			<BackButton className='button404'/>
			<HomeButton className='button404'/>
		</div>
	);
}


