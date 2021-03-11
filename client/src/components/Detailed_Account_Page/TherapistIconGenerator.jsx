import React from 'react'
import ReactDOM from 'react-dom'
import TherapistVisitIcons from './TherapistVisitIcons'
import { v4 as uuidv4 } from 'uuid'
import {TherapistIconArray} from './DetailedAcountPageArrays'
import In_person_icon from '../images/in-person-icon.svg'
import Online_icon from "../images/online-icon.svg"


function TherapistIconGenerator(props){
    const IPVisits=props.in_person_visits
    const OnlineVisits=props.online_visits

    if(IPVisits && OnlineVisits){
        return(
            <div className='therapist-visit-icon-container'>
                <TherapistVisitIcons img={In_person_icon} alt='in-person visits icon' text='In-Person Visits' />
                <TherapistVisitIcons img={Online_icon} alt='online-visits icon' text='Online Visits' />
            </div> 
        )
    }
    if(IPVisits && !OnlineVisits){
        return(
            <div>
                <TherapistVisitIcons img={In_person_icon} alt='in-person visits icon' text='In-Person Visits' />
            </div>
        )
    }
    if(!IPVisits && OnlineVisits){
        return(
            <div>
                <TherapistVisitIcons img={Online_icon} alt='online-visits icon' text='Online Visits' />
            </div>
        )
    }
    if(!IPVisits && !OnlineVisits){
        return
    }
}

export default TherapistIconGenerator;