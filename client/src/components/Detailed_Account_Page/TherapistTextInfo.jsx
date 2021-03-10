import React from 'react'
import ReactDOM from 'react-dom'
import TherapistSearchTitle from '../Main_Search_Page/TherapistSearchTitle'
import TherapistSearchSubtitle from '../Main_Search_Page/TherapistSearchSubtitle'
import TherapistAddress from './TherapistAddress'

function TherapistTextInfo(props){
    return(
        <div>
            <TherapistSearchTitle title={props.title} />
            <TherapistSearchSubtitle text={props.text} />
            <TherapistAddress address={props.address} />
        </div>
    )
}

export default TherapistTextInfo;