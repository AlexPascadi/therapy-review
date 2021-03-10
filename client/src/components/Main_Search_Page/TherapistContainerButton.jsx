import React from 'react'
import ReactDOM from 'react-dom'

function TherapistContainerButton(props){
    return(
        <button className="form-button therapist-search-container-button" onClick={props.onClick}> 
        <p className="subtitle buttontext">{props.buttontext}</p>
        </button>
    )
}

export default TherapistContainerButton;