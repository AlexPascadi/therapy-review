import React from 'react'
import ReactDOM from 'react-dom'

function TherapistRating(props){
    return(
        <div className="therapist-search-rating">
            <img src={props.img} alt='Star symbol'/>
            <p className='therapist-rating-text'>{props.RatingAndReview}</p>
        </div>
    )
}

export default TherapistRating;