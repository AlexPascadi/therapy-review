import React from 'react'
import ReactDOM from 'react-dom'
import FavoriteTherapistImg from './FavoriteTherapistImg'
import FavoriteTherapistTitleContainer from './FavoriteTherapistTitleContainer'
import TherapistContainerButton from '../Main_Search_Page/TherapistContainerButton'



function FavoriteTherapistContainer(props){
    return(
        <div className="therapist-search-container favoriteTherapistContainer">
            <FavoriteTherapistImg img={props.img} alt={props.alt}/>
            <FavoriteTherapistTitleContainer title={props.title} subtitle={props.subtitle} RatingAndReview={props.RatingAndReview}/>
            <TherapistContainerButton buttontext='View Page' />
        </div>
    )
}

export default FavoriteTherapistContainer;