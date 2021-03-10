import React from 'react'
import ReactDOM from 'react-dom'

function MenuBarTitle(props){
    return(
        <h1 className="title menu-bar-title">{props.text}</h1>
    )
}

export default MenuBarTitle;