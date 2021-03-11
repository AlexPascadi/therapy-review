import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import ProfilePictureOne from '../images/IMG_4509.JPG'
import MenuBar from './MenuBar'
import TherapistSearchContainer from './TherapistSearchContainer'
import TherapistContainerArray from './TherapistContainerArray'
import {ReviewArray} from '../Detailed_Account_Page/DetailedAcountPageArrays'
import {v4 as uuidv4} from 'uuid'

function AddTherapist(TherapistObj){
    const DesiredSubtitle=TherapistObj.specialties
    const DesiredTitle=TherapistObj.first_name+' '+TherapistObj.last_name
    const DesiredRatingAndReview=TherapistObj.rating+ ' (' + TherapistObj.reviewcount + ')'
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
function MainSearchPage(props){
    let DesiredArray=ReviewArray
    const [TherapistSearch, setTherapistSearch]=useState({
        SearchName: '',
        SearchLocation: '',
        SearchSpecialty:''
    })

    const [outcome, setOutcome] = useState([])

    async function HandleClick(){
        let desiredName=TherapistSearch.SearchName.replace('^[a-zA-Z0-9]', '_')
        let desiredLocation=TherapistSearch.SearchLocation.replace('^[a-zA-Z0-9]', '_')
        let desiredSpecialty=TherapistSearch.SearchSpecialty.replace('^[a-zA-Z0-9]', '_')
        if(desiredName===''){desiredName='_'}
        if(desiredLocation===''){desiredLocation='_'}
        if(desiredSpecialty===''){desiredSpecialty='_'}
        let desiredURL='/therapists/'+desiredName+'/'+desiredLocation+'/'+desiredSpecialty
        let response=await fetch("http://localhost:5000" + desiredURL).then((result)=>result.json())
        setOutcome(response)
        // let result=response.json()
        // console.log(response)
        // console.log(desiredURL)
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

    if (outcome===null){
        return(
            <div>
            <MenuBar TherapistSearch={TherapistSearch} setTherapistSearch={setTherapistSearch} onClick={HandleClick} />
             <div className="landing-search-page-body">
             <div className='main-search-page-padder'>
                {/* {console.log(outcome)} */}
                 <h1>Sorry, the therapist you requested does not exist.</h1>
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
            </div>               
            </div>
        </div>
    )
}

export default MainSearchPage;