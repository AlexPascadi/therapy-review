import React from 'react'
import ReactDOM from 'react-dom'
import {ReviewArray} from '../Detailed_Account_Page/DetailedAcountPageArrays'
import InitialsHiddenText from '../Detailed_Account_Page/InitialsHiddenText'
import DisplayedReview from '../Detailed_Account_Page/DisplayedReview'


function ReviewRenderer(element){
    return (
        <div className='read-more-reviews-review'>
            <DisplayedReview review={element.content} />
            <InitialsHiddenText date={element.date} />
        </div>
    )
}

function MoreReviewsGenerator(props){
    function ElementPicker(element){
        return element.URLdestination.includes(props.name)
    }
    const DesiredArray=ReviewArray.find(ElementPicker).review
    return(
        DesiredArray.map(ReviewRenderer)
    )
}

export default MoreReviewsGenerator;