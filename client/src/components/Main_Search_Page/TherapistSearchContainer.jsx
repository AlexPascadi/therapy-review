import React from 'react'
import ReactDOM from 'react-dom'
import TherapistImg from './TherapistImg'
import TherapistTitleContainer from './TherapistTitleContainer'
import {TherapistSearchButtons, ButtonsArray} from './TherapistSearchButtons'

function TherapistSearchContainer(props){
    return(
        <div className="therapist-search-container">
            <TherapistImg img={props.img} alt={props.alt}/>
            <TherapistTitleContainer title={props.title} subtitle={props.subtitle} RatingAndReview={props.RatingAndReview}/>
            <TherapistSearchButtons URLdestination={props.URLdestination}/>
        </div>
    )
}

export default TherapistSearchContainer;