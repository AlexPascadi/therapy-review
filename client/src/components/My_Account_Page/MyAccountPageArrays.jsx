import React from 'react'
import ReactDOM from 'react-dom'
import ProfilePictureOne from '../images/IMG_4509.JPG'
import ProfilePictureTwo from '../images/Stacy_Berrin.png'
import ProfilePictureThree from '../images/Adam_Raff.png'

const MyFavoritesArray=[
    {
        email:'saetsunawaki@gmail.com',
        myFavorites:[
            {     
                img:ProfilePictureOne,
                alt:'Therapist Picture',
                title:'Dr. Avnish Sengupta, PhD',
                subtitle:'Psychologist',
                RatingAndReview:'3.98 (82)'
            },
            {
                img:ProfilePictureTwo,
                alt:'Therapist Picture',
                title:'Dr. Stacy Berrin, PhD',
                subtitle:'Psychologist',
                RatingAndReview:'3.78 (58)'
    
            }
        ]
    }
]

export {MyFavoritesArray};