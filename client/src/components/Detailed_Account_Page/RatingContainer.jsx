import React from 'react'
import ReactDOM from 'react-dom'
import RatingTitle from './Rating_title'
import RatingContent from './RatingContent'


function RatingContainer(props){
    return(
        <div className='review-container'>
            <RatingTitle text={props.text} />
            <RatingContent rating={props.rating} />
        </div>
    )
}

export default RatingContainer;
