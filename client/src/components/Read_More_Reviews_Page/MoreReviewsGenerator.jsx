import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import { ReviewArray } from '../Detailed_Account_Page/DetailedAcountPageArrays'
import InitialsHiddenText from '../Detailed_Account_Page/InitialsHiddenText'
import DisplayedReview from '../Detailed_Account_Page/DisplayedReview'


function ReviewRenderer(element) {
    const desiredDate = element.date_posted.split('T')[0]
    const [result, setResult]=useState({})
    if (element.anonymous===1) {
        return (
            <div className='read-more-reviews-review'>
                <DisplayedReview review={element.comment} />
                <InitialsHiddenText date={desiredDate} />
            </div>
        )
    }
    else {
        console.log(element.client)
        fetch("http://localhost:5000/clients/" + String(element.client))
        .then((result) =>result.json())
        .then(obj=>setResult(obj))
        return (
            <div className='read-more-reviews-review'>
                <DisplayedReview review={element.comment} />
                {console.log(result)}
                <p className='review initials-hidden-text'><span>{result.first_name + ' ' + result.last_name}, </span><span>{desiredDate}</span></p>
            </div>
        )
    }
}

function MoreReviewsGenerator(props) {
    // function ElementPicker(element){
    //     return element.URLdestination.includes(props.name)
    // }
    // const DesiredArray=ReviewArray.find(ElementPicker).review
    if (props.array.length > 0) {
        return (
            props.array.map(ReviewRenderer)
        )
    }
    else {
        return (<h1>No reviews.</h1>)
    }
}

export default MoreReviewsGenerator;