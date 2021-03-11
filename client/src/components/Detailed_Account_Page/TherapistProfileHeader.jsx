import React from 'react'
import ReactDOM from 'react-dom'
import TherapistTextInfo from './TherapistTextInfo'
import TherapistImg from '../Main_Search_Page/TherapistImg'
import TherapistIconGenerator from './TherapistIconGenerator'
import {ReviewArray} from './DetailedAcountPageArrays'


function TherapistProfileHeader(props){
    
   
    return(
        <div className='image-and-title-container'>
            <div>
                <TherapistImg img={props.img} alt='Therapist Picture' />
            </div>
            <div className='therapist-title-container'>
                <TherapistTextInfo title={props.title} text={props.specialties} address={props.address} />
                <TherapistIconGenerator in_person_visits={props.in_person_visits} online_visits={props.online_visits}/>
            </div>
        </div>
    )
}

export default TherapistProfileHeader;