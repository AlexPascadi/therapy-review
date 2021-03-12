import React from 'react'
import ReactDOM from 'react-dom'
import ReadMoreReviewsButton from './ReadMoreReviewsButton'
import {Link} from 'react-router-dom'

function ReviewInputButtons(props){
    const desiredReadmorereviews=String(props.therapistid)+'/readmorereviews'
    const desiredwriteareview=String(props.therapistid)+'/writeareview'
    return(
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

export default ReviewInputButtons;