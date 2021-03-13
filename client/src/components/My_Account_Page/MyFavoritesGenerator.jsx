import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { MyFavoritesArray } from './MyAccountPageArrays'
import FavoriteTherapistContainer from './FavoriteTherapistContainer'
import image1 from '../images/Adam_Raff.png'
import image2 from '../images/Noam_Schneck.png'
import image3 from '../images/Juan-Williams.png'
import image4 from '../images/Lauren-Eavarone.png'
import image5 from '../images/Sudhir-Gadh.png'
import image6 from '../images/Irina-Kogan.png'
import image7 from '../images/Mark-Lazarus.png'


function MyFavoritesGenerator(props) {
    function FavoritesAppender(TherapistObj) {
        switch (TherapistObj.image_location) {
            case '../images/Adam_Raff.png':
                return (
                    <FavoriteTherapistContainer
                        img={image1}
                        alt="Therapist Picture"
                        title={TherapistObj.first_name + ' ' + TherapistObj.last_name}
                        subtitle={TherapistObj.specialities}
                        RatingAndReview={TherapistObj.rating}
                        therapistid={TherapistObj.id}
                        clientid={props.clientid} />
                )
            case '../images/Noam_Schneck.png':
                return (
                    <FavoriteTherapistContainer
                        img={image2}
                        alt="Therapist Picture"
                        title={TherapistObj.first_name + ' ' + TherapistObj.last_name}
                        subtitle={TherapistObj.specialities}
                        RatingAndReview={TherapistObj.rating}
                        therapistid={TherapistObj.id}
                        clientid={props.clientid} />
                )
            case '../images/Juan-Williams.png':
                return (
                    <FavoriteTherapistContainer
                        img={image3}
                        alt="Therapist Picture"
                        title={TherapistObj.first_name + ' ' + TherapistObj.last_name}
                        subtitle={TherapistObj.specialities}
                        RatingAndReview={TherapistObj.rating}
                        therapistid={TherapistObj.id}
                        clientid={props.clientid} />
                )
            case '../images/Lauren-Eavarone.png':
                return (
                    <FavoriteTherapistContainer
                        img={image4}
                        alt="Therapist Picture"
                        title={TherapistObj.first_name + ' ' + TherapistObj.last_name}
                        subtitle={TherapistObj.specialities}
                        RatingAndReview={TherapistObj.rating}
                        therapistid={TherapistObj.id}
                        clientid={props.clientid} />
                )
            case '../images/Sudhir-Gadh.png':
                return (
                    <FavoriteTherapistContainer
                        img={image5}
                        alt="Therapist Picture"
                        title={TherapistObj.first_name + ' ' + TherapistObj.last_name}
                        subtitle={TherapistObj.specialities}
                        RatingAndReview={TherapistObj.rating}
                        therapistid={TherapistObj.id}
                        clientid={props.clientid} />
                )
            case '../images/Irina-Kogan.png':
                return (
                    <FavoriteTherapistContainer
                        img={image6}
                        alt="Therapist Picture"
                        title={TherapistObj.first_name + ' ' + TherapistObj.last_name}
                        subtitle={TherapistObj.specialities}
                        RatingAndReview={TherapistObj.rating}
                        therapistid={TherapistObj.id}
                        clientid={props.clientid} />
                )
            case '../images/Mark-Lazarus.png':
                return (
                    <FavoriteTherapistContainer
                        img={image7}
                        alt="Therapist Picture"
                        title={TherapistObj.first_name + ' ' + TherapistObj.last_name}
                        subtitle={TherapistObj.specialities}
                        RatingAndReview={TherapistObj.rating}
                        therapistid={TherapistObj.id}
                        clientid={props.clientid} />
                )
        }
    }

    return (
        <div className='favorites-container'>
            {props.ArrayName.map(FavoritesAppender)}
        </div>
    )
}

export default MyFavoritesGenerator;