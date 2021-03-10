import React from 'react'
import ReactDOM from 'react-dom'
import TherapistTextInfo from './TherapistTextInfo'
import TherapistImg from '../Main_Search_Page/TherapistImg'
import TherapistIconGenerator from './TherapistIconGenerator'
import {ReviewArray} from './DetailedAcountPageArrays'


function TherapistProfileHeader(props){
    const DesiredTitle=props.title.replace(/_/g,' ')
    const DesiredArray=ReviewArray.find((x)=>{return x.name===DesiredTitle})
    const DesiredText=DesiredArray.Specialties.reduce((a,x)=>{return a+', '+x})
   
    return(
        <div className='image-and-title-container'>
            <div>
                <TherapistImg img={DesiredArray.img} alt='Therapist Picture' />
            </div>
            <div className='therapist-title-container'>
                <TherapistTextInfo title={DesiredTitle} text={DesiredText} address={DesiredArray.address} />
                <TherapistIconGenerator name={DesiredTitle}/>
            </div>
        </div>
    )
}

export default TherapistProfileHeader;