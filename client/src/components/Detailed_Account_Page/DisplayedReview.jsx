import React from 'react'
import ReactDOM from 'react-dom'

function DisplayedReview(props){
    return(
        <p className='review'>{props.review}</p>
    )
}

export default DisplayedReview;