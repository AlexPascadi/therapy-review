import React from 'react'
import ReactDOM from 'react-dom'
import ReadMoreReviewsButton from './ReadMoreReviewsButton'
import { Link } from 'react-router-dom'

function ReviewInputButtons(props) {
    if (props.clientid === null) {
        const desiredReadmorereviews = '/readmorereviews/'+String(props.therapistid) 
        return (
            <div className='therapist-visit-icon-container read-more-review-button-container'>
                <Link to={desiredReadmorereviews}>
                    <ReadMoreReviewsButton buttontext='Read More Reviews' />
                </Link>
            </div>
        )
    }
    else {
        const desiredReadmorereviews = '/readmorereviews/' +String(props.therapistid) + '/'+String(props.clientid)
        const desiredwriteareview = '/writeareview/' + String(props.therapistid) + '/'+String(props.clientid)
        return (
            <div className='therapist-visit-icon-container read-more-review-button-container'>
                <Link to={desiredReadmorereviews}>
                    <ReadMoreReviewsButton buttontext='Read More Reviews' />
                </Link>
                <Link to={desiredwriteareview}>
                    <ReadMoreReviewsButton buttontext='Write A Review' />
                </Link>
            </div>
        )
    }
}

export default ReviewInputButtons;