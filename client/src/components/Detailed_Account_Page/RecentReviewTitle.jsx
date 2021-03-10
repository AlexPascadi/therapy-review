import React from 'react'
import ReactDOM from 'react-dom'

function RecentReviewTitle(props){
    return(
        <div>
            <h2 className='rating-title-text recent-review-title'>{props.title}</h2>
        </div>
    )
}

export default RecentReviewTitle;