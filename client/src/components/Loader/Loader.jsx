import { React } from 'react';
import loader from '../../img/loader.gif'
import './Loader.css'


export default function Loader() {
    return (
        <div className='loader-container'>
            <img src={loader} alt=' '/>
        </div>
    );
};