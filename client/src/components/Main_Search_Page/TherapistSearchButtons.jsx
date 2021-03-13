import React from 'react'
import ReactDOM from 'react-dom'
import TherapistContainerButton from './TherapistContainerButton'
import { v4 as uuidv4 } from 'uuid'
import { Redirect, Link } from 'react-router-dom'


function TherapistSearchButtons(props) {
    if (props.clientid === null) {
        return (
            <div className='therapist-search-button-container'>
                <Link to={"/therapists/" + props.URLdestination} >
                    <TherapistContainerButton buttontext="View Profile and Reviews" />
                </Link>
            </div>
        )
    }
    else {

        return (
            <div className='therapist-search-button-container'>
                <TherapistContainerButton buttontext="♡ Add to Favorites" onClick={props.onClick} />
                <Link to={"/therapists/" + props.URLdestination+"/"+props.clientid} >
                    <TherapistContainerButton buttontext="View Profile and Reviews" />
                </Link>
            </div>
        )
    }
}

export { TherapistSearchButtons };