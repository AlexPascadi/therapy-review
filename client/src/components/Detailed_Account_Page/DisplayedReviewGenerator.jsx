import React from 'react'
import ReactDOM from 'react-dom'
import InitialsHiddenText from './InitialsHiddenText'
import {ReviewArray} from './DetailedAcountPageArrays'
import DisplayedReview from './DisplayedReview'

function ReviewRenderer(element){
    const desiredDate=element.date_posted.split('T')[0]
    return (
        <div>
            <DisplayedReview review={element.comment} />
            <InitialsHiddenText date={desiredDate} />
        </div>
    )
}

function DisplayedReviewGenerator(props){
    // const Reviewarray=props.review.map(ReviewRenderer)
    // function ElementPicker(element){
    //     return element.name===props.name
    // }
    // const DesiredArray=ReviewArray.find(ElementPicker).review
    console.log(props.reviews)
    if(props.reviews.length>0){
    return(
        props.reviews.slice(0,2).map(ReviewRenderer)
    )
    }
    else{
        return(
            <h1>Loading</h1>
        )
    }
}

export default DisplayedReviewGenerator;