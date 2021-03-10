import React from 'react'
import ReactDOM from 'react-dom'
import InitialsHiddenText from './InitialsHiddenText'
import {ReviewArray} from './DetailedAcountPageArrays'
import DisplayedReview from './DisplayedReview'

function ReviewRenderer(element){
    return (
        <div>
            <DisplayedReview review={element.content} />
            <InitialsHiddenText date={element.date} />
        </div>
    )
}

function DisplayedReviewGenerator(props){
    function ElementPicker(element){
        return element.name===props.name
    }
    const DesiredArray=ReviewArray.find(ElementPicker).review
    return(
        DesiredArray.slice(0,2).map(ReviewRenderer)
    )
}

export default DisplayedReviewGenerator;