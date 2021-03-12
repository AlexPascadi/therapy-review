import React from 'react'
import ReactDOM from 'react-dom'
import RatingContainer from './RatingContainer'
import RecentReviewTitle from './RecentReviewTitle'
import {ReviewArray} from './DetailedAcountPageArrays'
import ReviewInputButtons from './ReviewInputButtons'
import DisplayedReviewGenerator from './DisplayedReviewGenerator'

function RatingAndReviewContainer(props){
    // const DesiredTitle=props.name.replace(/_/g,' ')
    // const DesiredArray=ReviewArray.find((x)=>{return x.name===DesiredTitle})
   
    return(
        <div className='Rating-and-reviews-container'>
            <RatingContainer text='Overall Rating' rating={props.rating}/>
            <div className='rating-and-review-hr-div'>
                <hr className='rating-and-review-hr' />
            </div>
            <div>
                <RecentReviewTitle title='Recent Reviews' />                        
                <div>
                    <DisplayedReviewGenerator reviews={props.reviews} />
                    <ReviewInputButtons therapistid={props.therapistid} />
                </div>
            </div>
        </div>
    )
}

export default RatingAndReviewContainer;