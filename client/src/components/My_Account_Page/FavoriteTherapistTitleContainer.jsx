import React from 'react'
import ReactDOM from 'react-dom'
import FavoriteTherapistTitle from './FavoriteTherapistTitle'
import TherapistSearchSubtitle from '../Main_Search_Page/TherapistSearchSubtitle'
import TherapistRating from '../Main_Search_Page/TherapistRating'
import StarSign from '../images/Star_sign.png'

function FavoriteTherapistTitleContainer(props){
    return(
        <div className='therapist-title-container favorite-therapist-title-container'>
            <FavoriteTherapistTitle title={props.title} />
            <TherapistSearchSubtitle text={props.subtitle} />
            <TherapistRating img={StarSign} RatingAndReview={props.RatingAndReview} />
        </div>
    )
}

export default FavoriteTherapistTitleContainer;