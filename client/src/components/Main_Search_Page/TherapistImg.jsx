import React from 'react'
import ReactDOM from 'react-dom'


function TherapistImg(props){
    return(
        <img src={props.img} alt={props.alt} className="therapist-container-img"/>
    )
}

export default TherapistImg;