import React from 'react'
import ReactDOM from 'react-dom'
import TherapistSearchTitle from './TherapistSearchTitle'
import TherapistSearchSubtitle from './TherapistSearchSubtitle'
import TherapistRating from './TherapistRating'
import StarSign from '../images/Star_sign.png'

function TherapistTitleContainer(props){
    return(
        <div className='therapist-title-container'>
            <TherapistSearchTitle title={props.title} />
            <TherapistSearchSubtitle text={props.subtitle} />
            <TherapistRating img={StarSign} RatingAndReview={props.RatingAndReview} />
        </div>
    )
}

export default TherapistTitleContainer;