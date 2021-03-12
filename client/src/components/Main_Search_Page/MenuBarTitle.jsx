import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'

function MenuBarTitle(props){
    return(
        <Link to='/search'>
        <h1 className="title menu-bar-title">{props.text}</h1>
        </Link>
    )
}

export default MenuBarTitle;