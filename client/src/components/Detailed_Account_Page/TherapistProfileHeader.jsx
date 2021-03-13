import React from 'react'
import ReactDOM from 'react-dom'
import TherapistTextInfo from './TherapistTextInfo'
import TherapistImg from '../Main_Search_Page/TherapistImg'
import TherapistIconGenerator from './TherapistIconGenerator'
import { ReviewArray } from './DetailedAcountPageArrays'
import image1 from '../images/Adam_Raff.png'
import image2 from '../images/Noam_Schneck.png'
import image3 from '../images/Juan-Williams.png'
import image4 from '../images/Lauren-Eavarone.png'
import image5 from '../images/Sudhir-Gadh.png'
import image6 from '../images/Irina-Kogan.png'
import image7 from '../images/Mark-Lazarus.png'

function TherapistProfileHeader(props) {
    // const TherapistArray=[null,null,null,null,null,null,null,null,image8,image9,image10,null,image12,image13,image14,image15]
    switch (props.img) {
        case '../images/Adam_Raff.png':
            return (
                <div className='image-and-title-container'>
                    <div>
                        <TherapistImg img={image1} alt='Therapist Picture' />
                    </div>
                    <div className='therapist-title-container'>
                        <TherapistTextInfo title={props.title} text={props.specialties} address={props.address} />
                        <TherapistIconGenerator in_person_visits={props.in_person_visits} online_visits={props.online_visits} />
                    </div>
                </div>
            )
        case '../images/Noam_Schneck.png':
            return (
                <div className='image-and-title-container'>
                    <div>
                        <TherapistImg img={image2} alt='Therapist Picture' />
                    </div>
                    <div className='therapist-title-container'>
                        <TherapistTextInfo title={props.title} text={props.specialties} address={props.address} />
                        <TherapistIconGenerator in_person_visits={props.in_person_visits} online_visits={props.online_visits} />
                    </div>
                </div>
            )
        case '../images/Juan-Williams.png':
            return (
                <div className='image-and-title-container'>
                    <div>
                        <TherapistImg img={image3} alt='Therapist Picture' />
                    </div>
                    <div className='therapist-title-container'>
                        <TherapistTextInfo title={props.title} text={props.specialties} address={props.address} />
                        <TherapistIconGenerator in_person_visits={props.in_person_visits} online_visits={props.online_visits} />
                    </div>
                </div>
            )
        case '../images/Lauren-Eavarone.png':
            return (
                <div className='image-and-title-container'>
                    <div>
                        <TherapistImg img={image4} alt='Therapist Picture' />
                    </div>
                    <div className='therapist-title-container'>
                        <TherapistTextInfo title={props.title} text={props.specialties} address={props.address} />
                        <TherapistIconGenerator in_person_visits={props.in_person_visits} online_visits={props.online_visits} />
                    </div>
                </div>
            )
        case '../images/Sudhir-Gadh.png':
            return (
                <div className='image-and-title-container'>
                    <div>
                        <TherapistImg img={image5} alt='Therapist Picture' />
                    </div>
                    <div className='therapist-title-container'>
                        <TherapistTextInfo title={props.title} text={props.specialties} address={props.address} />
                        <TherapistIconGenerator in_person_visits={props.in_person_visits} online_visits={props.online_visits} />
                    </div>
                </div>
            )
        case '../images/Irina-Kogan.png':
            return (
                <div className='image-and-title-container'>
                    <div>
                        <TherapistImg img={image6} alt='Therapist Picture' />
                    </div>
                    <div className='therapist-title-container'>
                        <TherapistTextInfo title={props.title} text={props.specialties} address={props.address} />
                        <TherapistIconGenerator in_person_visits={props.in_person_visits} online_visits={props.online_visits} />
                    </div>
                </div>
            )
        case '../images/Mark-Lazarus.png':
            return (
                <div className='image-and-title-container'>
                    <div>
                        <TherapistImg img={image7} alt='Therapist Picture' />
                    </div>
                    <div className='therapist-title-container'>
                        <TherapistTextInfo title={props.title} text={props.specialties} address={props.address} />
                        <TherapistIconGenerator in_person_visits={props.in_person_visits} online_visits={props.online_visits} />
                    </div>
                </div>
            )
    }
}

export default TherapistProfileHeader;