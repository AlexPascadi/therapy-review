import React from 'react'
import ReactDOM from 'react-dom';


function TherapistVisitIcons(props){
    return(
        <button className="form-button therapist-search-container-button therapist-visit-icons">
            <img src={props.img} alt={props.alt} /> 
            <p className="subtitle buttontext icontext">{props.text}</p>
        </button>
    )
}

export default TherapistVisitIcons;