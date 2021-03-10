import React from 'react'
import ReactDOM from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

function redirector(){
    return <Redirect to='/login' />
}
function LoginSignUpButton(props){
    return(
        <button className="main loginbutton">
        <p className="loginbuttontext">{props.buttontext}</p>
        </button>
    )
}

export default LoginSignUpButton;