import React from 'react'
import ReactDOM from 'react-dom'
import ReadMoreReviewsButton from '../Detailed_Account_Page/ReadMoreReviewsButton'
import MenuBar from '../Main_Search_Page/MenuBar'
import {ReviewArray} from '../Detailed_Account_Page/DetailedAcountPageArrays'
import MoreReviewsGenerator from './MoreReviewsGenerator'
// import {useParams} from "react-router-dom";


function ReadMoreReviewsPage(props){
    const checkURLDestination= '/'+props.match.params.therapist
    function ReviewPicker(element){
        return checkURLDestination===element.URLdestination
    }
    const DesiredArray=ReviewArray.find(ReviewPicker)
    return(
        <div>
            <MenuBar />
            <div className='landing-search-page-body read-more-reviews-body'>
                <h1 className='my-account-page-title'>{DesiredArray.ReviewCount()} Reviews</h1>
                <div className='read-more-review-container'>
                    <MoreReviewsGenerator name={props.match.params.therapist} />
                </div>
            </div>
        </div>
    )
}

export default ReadMoreReviewsPage;