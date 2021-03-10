import React from 'react'
import ReactDOM from 'react-dom'

function InitialsHiddenText(props){
    return(
        <p className='review initials-hidden-text'><span>Initials Hidden, </span><span>{props.date}</span></p>
    )
}

export default InitialsHiddenText;