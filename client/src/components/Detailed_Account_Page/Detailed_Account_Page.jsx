import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Full_star_rating from "../images/full-star-rating.svg"
import Half_star_rating from "../images/half-star-rating.svg"
import { MenuBarWithoutSearchBar, LoggedInMenuBarWithoutSearchBar } from "../Main_Search_Page/MenuBar"
import TherapistProfileHeader from './TherapistProfileHeader'
import RatingAndReviewContainer from './RatingAndReviewContainer'
import Styledhr from './Styledhr'
import EducationAndBgContainer from './EducationAndBgContainer'
import EducationAndBgAdditionalInfo from './EducationAndBgAdditionalInfo'
import { Route, useRouteMatch, matchPath } from "react-router-dom"
import ReadMoreReviewsPage from '../Read_More_Reviews_Page/ReadMoreReviewsPage'
import { ReviewArray } from './DetailedAcountPageArrays'

// require('react-dom');
// window.React2 = require('react');
// console.log(window.React1 === window.React2);
class Detailed_Account_Page_Logged_In extends React.Component {
    constructor() {
        super()
        this.state = {
            ReviewArray: [],
            therapistobj: {},
            promiseiscompleted: false
        }
    }
    componentDidMount() {
        const mappingid = this.props.match.params.therapistid
        const DesiredURL = '/therapists/' + mappingid
        const DesiredURLforreview = '/reviews/therapist/' + mappingid
        fetch("http://localhost:5000" + DesiredURL, {
            method: "GET",
            headers: { "Content-type": "application/json; charset=UTF-8" }
        }).then(response => response.json())
            .then(
                therapistobj => {
                    if (therapistobj) {
                        return fetch("http://localhost:5000" + DesiredURLforreview, {
                            method: "GET",
                            headers: { "Content-type": "application/json; charset=UTF-8" }
                        }).then(response => response.json())
                            .then(review => {
                                if (review) {
                                    this.setState({
                                        therapistobj: therapistobj,
                                        ReviewArray: review,
                                        promiseiscompleted: true
                                    })
                                }
                            })
                    }
                })
        // let response1 = await fetch("http://localhost:5000" + DesiredURL).then((result) => result.json())
        // // console.log(response1)
        // let response2 = await fetch("http://localhost:5000" + DesiredURLforreview).then((result) => result.json())
        // // console.log(response2)
        // setTherapistobj(response1)
        // setReviewArray(response2)
        // setPromiseiscompleted(true)
    }
    render() {
        if (this.state.promiseiscompleted) {
            // console.log(therapistobj)
            // setReviewArray(results[1])
            // setTherapistobj(results[0])
            // console.log(ReviewArray)

            let EducationAndTrainingArray = this.state.therapistobj.experience.split('_')
            let specialitiesArray = this.state.therapistobj.specialities.split(',')
            let certificationArray = this.state.therapistobj.board_certification.split('_')

            // console.log(response)
            const DesiredTitle = this.state.therapistobj.first_name + ' ' + this.state.therapistobj.last_name
            return (
                <div>
                    <div>
                        <div>
                            <LoggedInMenuBarWithoutSearchBar clientid={this.props.match.params.clientid}/>
                        </div>
                        <div className='landing-search-page-body'>
                            <TherapistProfileHeader img={this.state.therapistobj.image_location} title={DesiredTitle} specialties={this.state.therapistobj.specialities} address={this.state.therapistobj.address} in_person_visits={this.state.therapistobj.in_person_visits} online_visits={this.state.therapistobj.online_visits} />
                            <Styledhr />
                            <RatingAndReviewContainer /*linkparam={url}*/ clientid={this.props.match.params.clientid} therapistid={this.props.match.params.therapistid} rating={this.state.therapistobj.rating} reviews={this.state.ReviewArray} />
                            <Styledhr />
                            <div className='therapist-info-container'>
                                <EducationAndBgContainer title='Education And Background' content={this.state.therapistobj.description} name={DesiredTitle} />
                                <div className='rating-and-review-hr-div'>
                                    <hr className='rating-and-review-hr therapist-info-hr' />
                                </div>
                                <div className='education-and-background-container'>
                                    <EducationAndBgAdditionalInfo title='Specialties' ArrayName={specialitiesArray} />
                                    <EducationAndBgAdditionalInfo title='Education and Training' ArrayName={EducationAndTrainingArray} />
                                    <EducationAndBgAdditionalInfo title='Board Certification' ArrayName={certificationArray} />
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
        else {
            return (
                <h1>Loading</h1>
            )
        }


    }
}
class Detailed_Account_Page_Not_Logged_In extends React.Component {
    constructor() {
        super()
        this.state = {
            ReviewArray: [],
            therapistobj: {},
            promiseiscompleted: false
        }
    }
    componentDidMount() {
        const mappingid = this.props.match.params.therapistid
        const DesiredURL = '/therapists/' + mappingid
        const DesiredURLforreview = '/reviews/therapist/' + mappingid
        fetch("http://localhost:5000" + DesiredURL, {
            method: "GET",
            headers: { "Content-type": "application/json; charset=UTF-8" }
        }).then(response => response.json())
            .then(
                therapistobj => {
                    if (therapistobj) {
                        return fetch("http://localhost:5000" + DesiredURLforreview, {
                            method: "GET",
                            headers: { "Content-type": "application/json; charset=UTF-8" }
                        }).then(response => response.json())
                            .then(review => {
                                if (review) {
                                    this.setState({
                                        therapistobj: therapistobj,
                                        ReviewArray: review,
                                        promiseiscompleted: true
                                    })
                                }
                            })
                    }
                })
        // let response1 = await fetch("http://localhost:5000" + DesiredURL).then((result) => result.json())
        // // console.log(response1)
        // let response2 = await fetch("http://localhost:5000" + DesiredURLforreview).then((result) => result.json())
        // // console.log(response2)
        // setTherapistobj(response1)
        // setReviewArray(response2)
        // setPromiseiscompleted(true)
    }
    render() {
        if (this.state.promiseiscompleted) {
            // console.log(therapistobj)
            // setReviewArray(results[1])
            // setTherapistobj(results[0])
            // console.log(ReviewArray)

            let EducationAndTrainingArray = this.state.therapistobj.experience.split('_')
            let specialitiesArray = this.state.therapistobj.specialities.split(',')
            let certificationArray = this.state.therapistobj.board_certification.split('_')

            // console.log(response)
            const DesiredTitle = this.state.therapistobj.first_name + ' ' + this.state.therapistobj.last_name
            return (
                <div>
                    <div>
                        <div>
                            <MenuBarWithoutSearchBar />
                        </div>
                        <div className='landing-search-page-body'>
                            <TherapistProfileHeader img={this.state.therapistobj.image_location} title={DesiredTitle} specialties={this.state.therapistobj.specialities} address={this.state.therapistobj.address} in_person_visits={this.state.therapistobj.in_person_visits} online_visits={this.state.therapistobj.online_visits} />
                            <Styledhr />
                            <RatingAndReviewContainer /*linkparam={url}*/ clientid={null} therapistid={this.props.match.params.therapistid} rating={this.state.therapistobj.rating} reviews={this.state.ReviewArray} />
                            <Styledhr />
                            <div className='therapist-info-container'>
                                <EducationAndBgContainer title='Education And Background' content={this.state.therapistobj.description} name={DesiredTitle} />
                                <div className='rating-and-review-hr-div'>
                                    <hr className='rating-and-review-hr therapist-info-hr' />
                                </div>
                                <div className='education-and-background-container'>
                                    <EducationAndBgAdditionalInfo title='Specialties' ArrayName={specialitiesArray} />
                                    <EducationAndBgAdditionalInfo title='Education and Training' ArrayName={EducationAndTrainingArray} />
                                    <EducationAndBgAdditionalInfo title='Board Certification' ArrayName={certificationArray} />
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
        else {
            return (
                <h1>Loading</h1>
            )
        }


    }
}

// function Detailed_Account_Page(props) {
//     // console.log(props)
//     const mappingid = props.match.params.therapistid
//     const DesiredURL = '/therapists/' + mappingid
//     const DesiredURLforreview = '/reviews/therapist/' + mappingid
//     // console.log('hello1')
//     const [ReviewArray, setReviewArray] = useState([])
//     const [therapistobj, setTherapistobj] = useState({})
//     const [promiseiscompleted, setPromiseiscompleted] = useState(false)
//     //    console.log('hello')

//     // fetch("http://localhost:5000"+DesiredURL).then(function(response){
//     //     if(response.ok){
//     //         console.log('hello')
//     //         return response.json()
//     //     }
//     //     else{
//     //         return Promise.reject(response)
//     //     }
//     // }).then(function(data){
//     //     setTherapistobj(data)
//     //     return fetch("http://localhost:5000"+DesiredURLforreview)
//     // }).then(function(response){
//     //     if(response.ok){
//     //         return response.json()
//     //     }
//     //     else{
//     //         return Promise.reject(response)
//     //     }
//     // }).then(function(userData){
//     //     setReviewArray(userData)
//     // })
//     // useEffect(()=>{
//     //     Promise.all([
//     //         fetch("http://localhost:5000"+DesiredURL),
//     //         fetch("http://localhost:5000"+DesiredURLforreview)
//     //     ]).then(function (responses) {
//     //         // Get a JSON object from each of the responses
//     //         return Promise.all(responses.map(function (response) {
//     //             return response.json();
//     //         }));
//     //     }).then(function (data) {
//     //         // Log the data to the console
//     //         // You would do something with both sets of data here
//     //         setReviewArray(data[1])
//     //         setTherapistobj(data[0])
//     //     })

//     // },[ReviewArray,therapistobj])

//     // function getData(){

//     //         Promise.all([
//     //             fetch("http://localhost:5000"+DesiredURL),
//     //             fetch("http://localhost:5000"+DesiredURLforreview)
//     //         ]).then(function (responses) {
//     //         // Get a JSON object from each of the responses
//     //             return Promise.all(responses.map(function (response) {
//     //             return response.json();
//     //         }));
//     //         }).then(function (data) {
//     //         // Log the data to the console
//     //         // You would do something with both sets of data here
//     //         console.log('hello')
//     //         setReviewArray(data[1])
//     //         setTherapistobj(data[0])
//     //         setPromiseiscompleted(true)
//     //         })
//     // }

//     async function getData() {
//         let response1 = await fetch("http://localhost:5000" + DesiredURL).then((result) => result.json())
//         // console.log(response1)
//         let response2 = await fetch("http://localhost:5000" + DesiredURLforreview).then((result) => result.json())
//         // console.log(response2)
//         setTherapistobj(response1)
//         setReviewArray(response2)
//         setPromiseiscompleted(true)
//     }

//     // async function getData(urls){
//     //     var data = await Promise.all(
//     //         urls.map(
//     //             url =>
//     //                 fetch(url).then(
//     //                     (response) => response.json()
//     //                 )));

//     //     setReviewArray(data[1])
//     //     setTherapistobj(data[0])
//     //     // setPromiseiscompleted(true)
//     //     return data

//     // }
//     getData(["http://localhost:5000" + DesiredURL, "http://localhost:5000" + DesiredURLforreview])
//     // let response=await fetch("http://localhost:5000" + DesiredURL).then((result)=>result.json())
//     if (promiseiscompleted) {
//         console.log(therapistobj)
//         // setReviewArray(results[1])
//         // setTherapistobj(results[0])
//         console.log(ReviewArray)

//         let EducationAndTrainingArray = therapistobj.experience.split('_')
//         let specialitiesArray = therapistobj.specialities.split(',')
//         let certificationArray = therapistobj.board_certification.split('_')

//         // console.log(response)
//         const DesiredTitle = therapistobj.first_name + ' ' + therapistobj.last_name
//         return (
//             <div>
//                 <div>
//                     <div>
//                         <MenuBar />
//                     </div>
//                     <div className='landing-search-page-body'>
//                         <TherapistProfileHeader img={therapistobj.image_location} title={DesiredTitle} specialties={therapistobj.specialities} address={therapistobj.address} in_person_visits={therapistobj.in_person_visits} online_visits={therapistobj.online_visits} />
//                         <Styledhr />
//                         <RatingAndReviewContainer /*linkparam={url}*/ therapistid={mappingid} rating={therapistobj.rating} reviews={ReviewArray} />
//                         <Styledhr />
//                         <div className='therapist-info-container'>
//                             <EducationAndBgContainer title='Education And Background' content={therapistobj.description} name={DesiredTitle} />
//                             <div className='rating-and-review-hr-div'>
//                                 <hr className='rating-and-review-hr therapist-info-hr' />
//                             </div>
//                             <div className='education-and-background-container'>
//                                 <EducationAndBgAdditionalInfo title='Specialties' ArrayName={specialitiesArray} />
//                                 <EducationAndBgAdditionalInfo title='Education and Training' ArrayName={EducationAndTrainingArray} />
//                                 <EducationAndBgAdditionalInfo title='Board Certification' ArrayName={certificationArray} />
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//                 {/* <Route path={`${path}/readmorereviews`}>
//             <ReadMoreReviewsPage name={props.match.params.therapist} />
//         </Route>   */}
//             </div>
//         )
//     }
//     else {
//         return (
//             <h1>Loading</h1>
//         )
//     }

// }

export {Detailed_Account_Page_Logged_In, Detailed_Account_Page_Not_Logged_In};