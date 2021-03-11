import React from 'react'
import ReactDOM from 'react-dom'
import TherapistContainerButton from './TherapistContainerButton'
import { v4 as uuidv4 } from 'uuid'
import {Redirect, Link} from 'react-router-dom'


function TherapistSearchButtons(props){
    
    return(
        <div className='therapist-search-button-container'>
            <TherapistContainerButton buttontext="♡ Add to Favorites" />
            <Link to={String(props.URLdestination)} >
            <TherapistContainerButton buttontext="View Profile and Reviews"/>
            </Link>
        </div>
    )
}

export {TherapistSearchButtons};