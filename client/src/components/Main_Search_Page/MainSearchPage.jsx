import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import ProfilePictureOne from '../images/IMG_4509.JPG'
import MenuBar from './MenuBar'
import TherapistSearchContainer from './TherapistSearchContainer'
import TherapistContainerArray from './TherapistContainerArray'
import {ReviewArray} from '../Detailed_Account_Page/DetailedAcountPageArrays'
import {v4 as uuidv4} from 'uuid'

function AddTherapist(TherapistObj){
    console.log("HERE!\n")
    const DesiredSubtitle=TherapistObj.specialities
    const DesiredTitle=TherapistObj.first_name+' '+TherapistObj.last_name
    let desiredURL = "/average_rating/therapist/" + TherapistObj.id.toString()
    console.log(desiredURL)
    let rating= 2 //await fetch("http://localhost:5000" + desiredURL).then((result)=>result.json())
    const DesiredRatingAndReview=rating.toString() + ' (' + " " + ')'
    // console.log(DesiredTitle)
    return(
        <TherapistSearchContainer 
        key={TherapistObj.id}
        img={TherapistObj.image_location}
        alt='Therapist Picture'
        title={DesiredTitle} 
        subtitle={DesiredSubtitle}
        RatingAndReview={DesiredRatingAndReview}
        URLdestination={TherapistObj.id}
        />
    )
}

// const getTherapists = async outcome => {
//     return Promise.all(outcome.map(AddTherapist))
// }

function MainSearchPage(props){
    let DesiredArray=ReviewArray
    const [TherapistSearch, setTherapistSearch]=useState({
        SearchName: '',
        SearchLocation: '',
        SearchSpecialty: ''
    })

    const [outcome, setOutcome] = useState([])
    const [handleClickTrigger, setHandleClickTrigger] = useState(true)
    if (handleClickTrigger===true) {
        HandleClick()
        setHandleClickTrigger(false)
    }

    async function HandleClick(){
        let desiredName=TherapistSearch.SearchName.replaceAll(/[^a-zA-Z0-9]/g, '_')
        let desiredLocation=TherapistSearch.SearchLocation.replaceAll(/[^a-zA-Z0-9]/g, '_')
        let desiredSpecialty=TherapistSearch.SearchSpecialty.replaceAll(/[^a-zA-Z0-9]/g, '_')
        if(desiredName===''){desiredName='_'}
        if(desiredLocation===''){desiredLocation='_'}
        if(desiredSpecialty===''){desiredSpecialty='_'}
        let desiredURL='/therapists/'+desiredName+'/'+desiredLocation+'/'+desiredSpecialty
        // console.log(desiredURL)
        let response=await fetch("http://localhost:5000" + desiredURL).then((result)=>result.json())
        setOutcome(response)
        // console.log(response)
    }

    // function TherapistPicker(element){
    //     const DesiredSubtitle=element.Specialties.reduce((a,x)=>{return a+', '+ x})
    //     return (element.name.includes(TherapistSearch.SearchName) && element.address.includes(TherapistSearch.SearchLocation) && DesiredSubtitle.includes(TherapistSearch.SearchSpecialty))
    // }
    // if(!(TherapistSearch.SearchName==='' && TherapistSearch.SearchLocation==='' && TherapistSearch.SearchSpecialty===''))
    // {
    //     DesiredArray=ReviewArray.filter(TherapistPicker)
    // }
    // if(DesiredArray===null){return(<h1>Sorry, no matches found</h1>)}

    if (outcome.length === 0 && handleClickTrigger === false){
        return(
            <div>
            <MenuBar TherapistSearch={TherapistSearch} setTherapistSearch={setTherapistSearch} onClick={HandleClick} />
             <div className="landing-search-page-body">
             <div className='main-search-page-padder'>
                {/* console.log(outcome) */}
                 <h1>Sorry, there are no therapists matching your search.</h1>
             </div>               
             </div>
         </div>
        )
    }
    return(
        <div>
           <MenuBar TherapistSearch={TherapistSearch} setTherapistSearch={setTherapistSearch} onClick={HandleClick} />
            <div className="landing-search-page-body">
            <div className='main-search-page-padder'>
                {outcome.map(AddTherapist)}
                {/* Promise.all(outcome.map(item => AddTherapist(item))) */}
                {/* getTherapists(outcome) */}
            </div>               
            </div>
        </div>
    )
}

export default MainSearchPage;