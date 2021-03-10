import React from 'react'
import ReactDOM from 'react-dom'

function ReadMoreReviewsButton(props){
    return(
        <button className="read-more-reviews">
            <p className="subtitle buttontext read-more-review-buttontext">{props.buttontext}</p>
        </button>
    )
}

export default ReadMoreReviewsButton;