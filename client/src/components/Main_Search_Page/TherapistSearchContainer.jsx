import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import TherapistImg from './TherapistImg'
import TherapistTitleContainer from './TherapistTitleContainer'
import { TherapistSearchButtons, ButtonsArray } from './TherapistSearchButtons'
// const [imagePath, setImagePath]=useState('../images/Adam_Raff.png')
// import image from imagePath
import image1 from '../images/Adam_Raff.png'
import image2 from '../images/Noam_Schneck.png'
import image3 from '../images/Juan-Williams.png'
import image4 from '../images/Lauren-Eavarone.png'
import image5 from '../images/Sudhir-Gadh.png'
import image6 from '../images/Irina-Kogan.png'
import image7 from '../images/Mark-Lazarus.png'

function TherapistSearchContainer(props) {
        switch (props.img) {
            case '../images/Adam_Raff.png':
                return (
                    <div className="therapist-search-container">
                        <TherapistImg img={image1} alt={props.alt} />
                        <TherapistTitleContainer title={props.title} subtitle={props.subtitle} RatingAndReview={props.RatingAndReview} />
                        <TherapistSearchButtons clientid={props.clientid} URLdestination={props.URLdestination} onClick={props.onClick} />
                    </div>
                )
            case '../images/Noam_Schneck.png':
                return (
                    <div className="therapist-search-container">
                        <TherapistImg img={image2} alt={props.alt} />
                        <TherapistTitleContainer title={props.title} subtitle={props.subtitle} RatingAndReview={props.RatingAndReview} />
                        <TherapistSearchButtons clientid={props.clientid} URLdestination={props.URLdestination} onClick={props.onClick} />
                    </div>
                )
            case '../images/Juan-Williams.png':
                return (
                    <div className="therapist-search-container">
                        <TherapistImg img={image3} alt={props.alt} />
                        <TherapistTitleContainer title={props.title} subtitle={props.subtitle} RatingAndReview={props.RatingAndReview} />
                        <TherapistSearchButtons clientid={props.clientid} URLdestination={props.URLdestination} onClick={props.onClick} />
                    </div>
                )
            case '../images/Lauren-Eavarone.png':
                return (
                    <div className="therapist-search-container">
                        <TherapistImg img={image4} alt={props.alt} />
                        <TherapistTitleContainer title={props.title} subtitle={props.subtitle} RatingAndReview={props.RatingAndReview} />
                        <TherapistSearchButtons clientid={props.clientid} URLdestination={props.URLdestination} onClick={props.onClick} />
                    </div>
                )
            case '../images/Sudhir-Gadh.png':
                return (
                    <div className="therapist-search-container">
                        <TherapistImg img={image5} alt={props.alt} />
                        <TherapistTitleContainer title={props.title} subtitle={props.subtitle} RatingAndReview={props.RatingAndReview} />
                        <TherapistSearchButtons clientid={props.clientid} URLdestination={props.URLdestination} onClick={props.onClick} />
                    </div>
                )
            case '../images/Irina-Kogan.png':
                return (
                    <div className="therapist-search-container">
                        <TherapistImg img={image6} alt={props.alt} />
                        <TherapistTitleContainer title={props.title} subtitle={props.subtitle} RatingAndReview={props.RatingAndReview} />
                        <TherapistSearchButtons clientid={props.clientid} URLdestination={props.URLdestination} onClick={props.onClick} />
                    </div>
                )
            case '../images/Mark-Lazarus.png':
                return (
                    <div className="therapist-search-container">
                        <TherapistImg img={image7} alt={props.alt} />
                        <TherapistTitleContainer title={props.title} subtitle={props.subtitle} RatingAndReview={props.RatingAndReview} />
                        <TherapistSearchButtons clientid={props.clientid} URLdestination={props.URLdestination} onClick={props.onClick} />
                    </div>
                )
        }
    


    //
    // setImagePath(props.img)
    // import(props.img) from props.img
    //const TherapistArray=[null,null,null,null,null,null,null,null,image8,image9,image10,null,image12,image13,image14,image15]
    // return (
    //     <div className="therapist-search-container">
    //         <TherapistImg img={image} alt={props.alt} />
    //         <TherapistTitleContainer title={props.title} subtitle={props.subtitle} RatingAndReview={props.RatingAndReview} />
    //         <TherapistSearchButtons URLdestination={props.URLdestination} onClick={props.onClick} />
    //     </div>
    // )
}

export default TherapistSearchContainer;