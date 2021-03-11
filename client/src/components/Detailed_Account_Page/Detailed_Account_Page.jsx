import React from 'react'
import ReactDOM from 'react-dom'
import Full_star_rating from "../images/full-star-rating.svg"
import Half_star_rating from "../images/half-star-rating.svg"
import MenuBar from "../Main_Search_Page/MenuBar"
import TherapistProfileHeader from './TherapistProfileHeader'
import RatingAndReviewContainer from './RatingAndReviewContainer'
import Styledhr from './Styledhr'
import EducationAndBgContainer from './EducationAndBgContainer'
import EducationAndBgAdditionalInfo from './EducationAndBgAdditionalInfo'
import { Route, useRouteMatch,matchPath } from "react-router-dom"
import ReadMoreReviewsPage from '../Read_More_Reviews_Page/ReadMoreReviewsPage'

// require('react-dom');
// window.React2 = require('react');
// console.log(window.React1 === window.React2);
async function Detailed_Account_Page(props){
    const mappingid=props.match.params.therapistid
    const DesiredURL= '/therapists/' + mappingid
    let response=await fetch("http://localhost:5000" + DesiredURL).then((result)=>result.json())
    
    // console.log(response)
    const DesiredTitle=response.first_name+ response.last_name
    return(
        <div>
        <div>
            <div>
                <MenuBar />
            </div>
            <div className='landing-search-page-body'>
               <TherapistProfileHeader img={response.image_location} title={DesiredTitle} specialties={response.specialties} address={response.address} in_person_visits={response.in_person_visits} online_visits={response.online_visits}/>
                <Styledhr />
                <RatingAndReviewContainer /*linkparam={url}*/ rating={response.rating} />
                <Styledhr />
                <div className='therapist-info-container'>
                    <EducationAndBgContainer title='Education And Background' name={props.match.params.therapist}/>
                    <div className='rating-and-review-hr-div'>
                        <hr className='rating-and-review-hr therapist-info-hr' />
                    </div>
                    <div className='education-and-background-container'>
                        <EducationAndBgAdditionalInfo name={props.match.params.therapist} title='Specialties' ArrayName= 'Specialties' />
                        <EducationAndBgAdditionalInfo name={props.match.params.therapist} title='Education and Training' ArrayName='EducationAndTraining' />
                        <EducationAndBgAdditionalInfo name={props.match.params.therapist} title='Board Certification' ArrayName='BoardCertification' />
                    </div>
                </div>

            </div>                 
        </div>
        {/* <Route path={`${path}/readmorereviews`}>
            <ReadMoreReviewsPage name={props.match.params.therapist} />
        </Route>   */}
        </div>
    )
}

export default Detailed_Account_Page;