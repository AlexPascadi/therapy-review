import React from 'react'
import ReactDOM from 'react-dom'
import {ReviewArray} from '../Detailed_Account_Page/DetailedAcountPageArrays'
import InitialsHiddenText from '../Detailed_Account_Page/InitialsHiddenText'
import DisplayedReview from '../Detailed_Account_Page/DisplayedReview'


function ReviewRenderer(element){
    const desiredDate=element.date_posted.split('T')[0]
    return (
        <div className='read-more-reviews-review'>
            <DisplayedReview review={element.comment} />
            <InitialsHiddenText date={desiredDate} />
        </div>
    )
}

function MoreReviewsGenerator(props){
    // function ElementPicker(element){
    //     return element.URLdestination.includes(props.name)
    // }
    // const DesiredArray=ReviewArray.find(ElementPicker).review
    if(props.array.length>0){
    return(
        props.array.map(ReviewRenderer)
    )
    }
    else{
        return(<h1>No reviews.</h1>)
    }
}

export default MoreReviewsGenerator;