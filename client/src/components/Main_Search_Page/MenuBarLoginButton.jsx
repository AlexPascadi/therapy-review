import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'

function MenuBarLoginButton(props){
    if(!props.isAuthenticated){
    return(
        <Link to='/login'>
        <button className="main loginbutton menu-bar-login-button"><p className="loginbuttontext" >Login/Sign Up</p></button>
        </Link>
    )
    }
    else{
        return(
            <Link to={'/clients/'+ props.clientid}>
                 <button className="main loginbutton menu-bar-login-button"><p className="loginbuttontext" >My Account</p></button>
            </Link>
        )
    }
}

function MenuBarLoggedInButton(props){
    return(
        <Link to={'/clients/' + String(props.clientid)}>
            <button className="main loginbutton menu-bar-login-button"><p className="loginbuttontext" >My Account</p></button>
        </Link>
    )
}

export {MenuBarLoginButton, MenuBarLoggedInButton};