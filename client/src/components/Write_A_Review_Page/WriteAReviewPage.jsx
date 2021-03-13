import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import {MenuBar,LoggedInMenuBarWithoutSearchBar} from '../Main_Search_Page/MenuBar'
import TherapistProfileHeader from '../Detailed_Account_Page/TherapistProfileHeader'
import Adam_Raff from '../images/Dr-Adam-Raff-MD-109495-circle_large 1.svg'
import TherapistSearchSubtitle from '../Main_Search_Page/TherapistSearchSubtitle'


function WriteAReviewPage(props){
    const clientid=props.match.params.clientid
    const mappingid= props.match.params.therapistid
    const [therapistobj,setTherapistobj]=useState({})
    const[PromiseisCompleted,setPromiseisCompleted]=useState(false)
    const DesiredURL= '/therapists/' + mappingid

    async function getData(){
        // console.log(response1)
        let response2 = await fetch("http://localhost:5000"+DesiredURL).then((result)=>result.json())
        // console.log(response2)
        setTherapistobj(response2)
        setPromiseisCompleted(true)
    }
    getData()
    // function ReviewPicker(element){
    //     return checkURLDestination===element.URLdestination
    // }
    // const DesiredArray=ReviewArray.find(ReviewPicker)
    const[Rating, setRating]=useState(0)
    const[isAnonymous, setisAnonymous]=useState(null)
    const[content,setContent]=useState('')
    function HandleClickOne(){
        setRating(1)
    }
    function HandleClickTwo(){
        setRating(2)
    }
    function HandleClickThree(){
        setRating(3)
        
    }
    function HandleClickFour(){
        setRating(4)
    }
    function HandleClickFive(){
        setRating(5)
    }
    function NotAnonymous(){
        setisAnonymous(1)
    }
    function YesAnonymous(){
        setisAnonymous(0)
    }
    function HandleChange(event){
        const review=event.target.value
        setContent(review)
    }
    function HandleClick(){
        let _data={
            comment: content,
            client: parseInt(clientid,10),
            anonymous:isAnonymous,
            rating:Rating,
            therapist:parseInt(mappingid,10),
        }
        fetch("http://localhost:5000"+"/reviews", {
            method: "POST",
            body: JSON.stringify(_data),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => response.json()) 
        .then(json => {
            console.log(json)

            if (json && json.success) {
                console.log("The review has been added")
            }
         })
         .catch(err => {
             console.log(err);
             // possibly display an error message on the frontend
         });
    }

    if(PromiseisCompleted){
        const DesiredTitle=therapistobj.first_name+' '+therapistobj.last_name
    return(
        <div>
            <LoggedInMenuBarWithoutSearchBar clientid={props.match.params.clientid} />
            <div className='landing-search-page-body'>
                <h1 className='my-account-page-title'> Write A Review</h1>
                <div className='write-a-review-panel'>
                <TherapistProfileHeader img={therapistobj.image_location} title={DesiredTitle} specialties={therapistobj.specialities} address={therapistobj.address} in_person_visits={therapistobj.in_person_visits} online_visits={therapistobj.online_visits} />
                    <div className='write-a-review-rating-and-anonymous-panel'>
                        <div className='write-a-review-rating-section'>
                            <TherapistSearchSubtitle text='Your Rating' />
                            <div className='write-a-review-rating-buttons'>
                                <button className='write-a-review-rating-button' onClick={HandleClickOne}>1</button>
                                <button className='write-a-review-rating-button' onClick={HandleClickTwo}>2</button>
                                <button className='write-a-review-rating-button' onClick={HandleClickThree}>3</button>
                                <button className='write-a-review-rating-button' onClick={HandleClickFour}>4</button>
                                <button className='write-a-review-rating-button' onClick={HandleClickFive}>5</button>
                            </div>
                        </div>
                        <div className='write-a-review-rating-section'>
                            <TherapistSearchSubtitle text='Anonymous' />
                            <div className='write-a-review-rating-buttons'>
                                <button className='write-a-review-rating-button' onClick={NotAnonymous}>Y</button>
                                <button className='write-a-review-rating-button' onClick={YesAnonymous}>N</button>
                            </div>
                        </div>
                    </div>
                    <div className='write-a-review-writing-section'>
                        <div className='write-a-review-your-review-container'>
                            <TherapistSearchSubtitle text='Your Review' />
                        </div>
                        <div className='write-a-review-text-area-container'>
                            <textarea className='write-a-review-textarea' onChange={HandleChange}></textarea>
                        </div>
                        <div>
                        <button className='write-a-review-rating-button write-a-review-submit-button' onClick={HandleClick}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }
    else{
        return(
            <h1>Loading</h1>
        )
    }
}

export default WriteAReviewPage;