import React from 'react';
import ReactDOM from 'react-dom';
import Title from './landing_title'
import Subtitle from './landing_subtitle'
import LoginSignUpButton from './LoginSignUpButton'
import SearchIcon from '../images/search-icon.svg'
import {Redirect, Link} from 'react-router-dom'

function LandingPage(){
    return(
        <div className="main">
            <div className="main topvector"></div>
            <div className="main bottomvector"></div>
            {/* <LoginSignUpButton buttontext="Login / Sign Up" /> */}
            <div className="main title_position">
            <Title text="Smart Therapy" /> 
            <Subtitle text="You deserve to be happy." /> 
            <div className='landing-page-buttons-container'>
            <Link to='/search'>
            <button type="button" class="search-button">Search <img class="search-btn" src={SearchIcon} alt="search-icon"/></button>
            </Link>
            <Link to='/login'>
            <button type="button" class="login-button">Log in / Sign Up</button>
            </Link>
            </div>
            </div>
            
        </div>
    )
}

export default LandingPage;