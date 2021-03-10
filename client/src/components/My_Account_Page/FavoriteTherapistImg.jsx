import React from 'react'
import ReactDOM from 'react-dom'

function FavoriteTherapistImg(props){
    return(
        <img src={props.img} alt={props.alt} className="therapist-container-img favorite-therapist-img"/>
    )
}

export default FavoriteTherapistImg;