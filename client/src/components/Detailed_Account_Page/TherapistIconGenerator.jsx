import React from 'react'
import ReactDOM from 'react-dom'
import TherapistVisitIcons from './TherapistVisitIcons'
import { v4 as uuidv4 } from 'uuid'
import {TherapistIconArray} from './DetailedAcountPageArrays'




function IconAdder(element){
    return(
        <TherapistVisitIcons key={uuidv4()} img={element.img} alt={element.alt} text={element.text} />
    )
}

function TherapistIconGenerator(props){
    function IconPicker(element){
        return (element.name).includes(props.name)
    }
    const TherapistSpecificArray=TherapistIconArray.filter(IconPicker)
    return( 
        <div className='therapist-visit-icon-container'>
            {TherapistSpecificArray.map(IconAdder)}
        </div>  
    )
}

export default TherapistIconGenerator;