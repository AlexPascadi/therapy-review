import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'

function MenuBarLoginButton(props){
    return(
        <Link to='/login'>
        <button className="main loginbutton menu-bar-login-button"><p className="loginbuttontext" >{props.buttontext}</p></button>
        </Link>
    )
}

export default MenuBarLoginButton;