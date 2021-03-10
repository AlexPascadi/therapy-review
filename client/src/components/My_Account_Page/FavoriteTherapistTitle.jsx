import React from 'react'
import ReactDOM from 'react-dom'

function FavoriteTherapistTitle(props){
    return (
        <h1 className="title therapist-search-title favorite-therapist-title">{props.title}</h1>
    )
}

export default FavoriteTherapistTitle;