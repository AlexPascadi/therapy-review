import React from 'react'
import ReactDOM from 'react-dom'
import FavoriteTherapistImg from './FavoriteTherapistImg'
import FavoriteTherapistTitleContainer from './FavoriteTherapistTitleContainer'
import TherapistContainerButton from '../Main_Search_Page/TherapistContainerButton'
import {Link} from 'react-router-dom'


function FavoriteTherapistContainer(props) {
    return (
        <div className="therapist-search-container favoriteTherapistContainer">
            <FavoriteTherapistImg img={props.img} alt={props.alt} />
            <FavoriteTherapistTitleContainer title={props.title} subtitle={props.subtitle} RatingAndReview={props.RatingAndReview} />
            <button className="form-button therapist-search-container-button">
            <Link to={"/therapists/"+String(props.therapistid)+'/'+String(props.clientid)}>
                <p className="subtitle buttontext">Visit Page</p>
            </Link>
            </button>
        </div>
    )
}

export default FavoriteTherapistContainer;