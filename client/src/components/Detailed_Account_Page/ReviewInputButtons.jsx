import React from 'react'
import ReactDOM from 'react-dom'
import ReadMoreReviewsButton from './ReadMoreReviewsButton'
import {Link} from 'react-router-dom'

function ReviewInputButtons(props){
    const desiredReadmorereviews=props.name+'/readmorereviews'
    const desiredwriteareview=props.name+'/writeareview'
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