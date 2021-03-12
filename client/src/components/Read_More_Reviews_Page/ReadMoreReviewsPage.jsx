import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import ReadMoreReviewsButton from '../Detailed_Account_Page/ReadMoreReviewsButton'
import MenuBar from '../Main_Search_Page/MenuBar'
import {ReviewArray} from '../Detailed_Account_Page/DetailedAcountPageArrays'
import MoreReviewsGenerator from './MoreReviewsGenerator'
// import {useParams} from "react-router-dom";


function ReadMoreReviewsPage(props){
    const DesiredURLforreview='/reviews/therapist/'+props.match.params.therapistid
    const [reviewarray,setreviewarray]=useState([])
    const[PromiseisCompleted,setPromiseisCompleted]=useState(false)

    async function getData(){
        // console.log(response1)
        let response2 = await fetch("http://localhost:5000"+DesiredURLforreview).then((result)=>result.json())
        // console.log(response2)
        setreviewarray(response2)
        setPromiseisCompleted(true)
    }

    getData( "http://localhost:5000"+DesiredURLforreview)
    // function ReviewPicker(element){
    //     return checkURLDestination===element.URLdestination
    // }
    // const DesiredArray=ReviewArray.find(ReviewPicker)
    if(PromiseisCompleted){
    return(
        <div>
            <MenuBar />
            <div className='landing-search-page-body read-more-reviews-body'>
                <h1 className='my-account-page-title'>{reviewarray.length} Reviews</h1>
                <div className='read-more-review-container'>
                    <MoreReviewsGenerator array={reviewarray} />
                </div>
            </div>
        </div>
        )
    }
    else{
        return(<h1>Loading</h1>)
    }
}

export default ReadMoreReviewsPage;