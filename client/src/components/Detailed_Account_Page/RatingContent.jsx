import React from 'react'
import ReactDOM from 'react-dom'

function RatingContent(props){
    return(
        <p className='rating-text'>{props.rating}</p>
    )
}

export default RatingContent;