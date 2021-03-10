import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import ProfilePictureOne from '../images/IMG_4509.JPG'
import MenuBar from './MenuBar'
import TherapistSearchContainer from './TherapistSearchContainer'
import TherapistContainerArray from './TherapistContainerArray'
import {ReviewArray} from '../Detailed_Account_Page/DetailedAcountPageArrays'
import {v4 as uuidv4} from 'uuid'

function AddTherapist(TherapistObj){
    const DesiredSubtitle=TherapistObj.Specialties.reduce((a,x)=>{return a+', '+ x})
    const DesiredRatingAndReview=TherapistObj.rating+' (' + TherapistObj.ReviewCount()+')'
    return(
        <TherapistSearchContainer 
        key={uuidv4()}
        img={TherapistObj.img}
        alt='Therapist Picture'
        title={TherapistObj.name} 
        subtitle={DesiredSubtitle}
        RatingAndReview={DesiredRatingAndReview}
        URLdestination={TherapistObj.URLdestination}
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
    function TherapistPicker(element){
        const DesiredSubtitle=element.Specialties.reduce((a,x)=>{return a+', '+ x})
        return (element.name.includes(TherapistSearch.SearchName) && element.address.includes(TherapistSearch.SearchLocation) && DesiredSubtitle.includes(TherapistSearch.SearchSpecialty))
    }
    if(!(TherapistSearch.SearchName==='' && TherapistSearch.SearchLocation==='' && TherapistSearch.SearchSpecialty===''))
    {
        DesiredArray=ReviewArray.filter(TherapistPicker)
    }
    if(DesiredArray===null){return(<h1>Sorry, no matches found</h1>)}
    return(
        <div>
           <MenuBar TherapistSearch={TherapistSearch} setTherapistSearch={setTherapistSearch}/>
            <div className="landing-search-page-body">
            <div className='main-search-page-padder'>
                {DesiredArray.map(AddTherapist)}
            </div>               
            </div>
        </div>
    )
}

export default MainSearchPage;