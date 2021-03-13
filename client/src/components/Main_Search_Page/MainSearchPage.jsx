import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import ProfilePictureOne from '../images/IMG_4509.JPG'
import {MenuBar, MenuBarWithoutSearchBar,LoggedInMenuBar} from './MenuBar'
import TherapistSearchContainer from './TherapistSearchContainer'
import TherapistContainerArray from './TherapistContainerArray'
import {ReviewArray} from '../Detailed_Account_Page/DetailedAcountPageArrays'
import {v4 as uuidv4} from 'uuid'




function MainSearchPageLoggedIn(props){
    const clientid= props.match.params.clientid
    function AddTherapist(TherapistObj){
        const DesiredSubtitle=TherapistObj.specialities
        const DesiredTitle=TherapistObj.first_name+' '+TherapistObj.last_name
        const DesiredRatingAndReview=TherapistObj.rating
        function HandleClickFavorites(){
            let _data={
                client: clientid,
                therapist: TherapistObj.id
            }
            // const response = await fetch(....)
            // const json = await response.json()
    
            // if (json && json..success)
            fetch("http://localhost:5000"+"/favorites", {
                method: "POST",
                body: JSON.stringify(_data),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            .then(response => response.json()) 
            .then(json => {
                console.log(json)
    
                if (json && json.success) {
                    console.log("Favorite successfully added")
                }
             })
             .catch(err => {
                 console.log(err);
                 // possibly display an error message on the frontend
             });
        }
        return(
            <TherapistSearchContainer 
            clientid={clientid}
            key={TherapistObj.id}
            img={TherapistObj.image_location}
            alt='Therapist Picture'
            title={DesiredTitle} 
            subtitle={DesiredSubtitle}
            RatingAndReview={DesiredRatingAndReview}
            URLdestination={TherapistObj.id}
            onClick={HandleClickFavorites}
            />
        )
    }
    
    // let DesiredArray=ReviewArray
    // const isAuthenticated=props.authHook[0]
    const [TherapistSearch, setTherapistSearch]=useState({
        SearchName: '',
        SearchLocation: '',
        SearchSpecialty: ''
    })

    const [outcome, setOutcome] = useState([])
    const [handleClickTrigger, setHandleClickTrigger] = useState(true)
    const [emptySearchMessage, setEmptySearchMessage] = useState("Loading...")
    if (handleClickTrigger===true) {
        HandleClick();
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
        setHandleClickTrigger(false);
        setEmptySearchMessage("Sorry! We found no therapists matching your search.")
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

    if (outcome.length === 0){
        return(
            <div>
            <LoggedInMenuBar TherapistSearch={TherapistSearch} clientid={clientid} setTherapistSearch={setTherapistSearch} onClick={HandleClick} />
             <div className="landing-search-page-body">
             <div className='main-search-page-padder'>
                {/* console.log(outcome) */}
                 <h1>{emptySearchMessage}</h1>
             </div>               
             </div>
         </div>
        )
    }
    return(
        <div>
           <LoggedInMenuBar TherapistSearch={TherapistSearch} clientid={clientid} setTherapistSearch={setTherapistSearch} onClick={HandleClick} />
            <div className="landing-search-page-body">
            <div className='main-search-page-padder'>
                {outcome.map(AddTherapist)}
            </div>               
            </div>
        </div>
    )
}

function MainSearchPageNotLoggedIn(props){
    const clientid=null
    function AddTherapist(TherapistObj){
        const DesiredSubtitle=TherapistObj.specialities
        const DesiredTitle=TherapistObj.first_name+' '+TherapistObj.last_name
        const DesiredRatingAndReview=TherapistObj.rating
        // function HandleClickFavorites(){
        //     let _data={
        //         client: clientid,
        //         therapist: TherapistObj.id
        //     }
        //     // const response = await fetch(....)
        //     // const json = await response.json()
    
        //     // if (json && json..success)
        //     fetch("http://localhost:5000"+"/favorites", {
        //         method: "POST",
        //         body: JSON.stringify(_data),
        //         headers: {"Content-type": "application/json; charset=UTF-8"}
        //     })
        //     .then(response => response.json()) 
        //     .then(json => {
        //         console.log(json)
    
        //         if (json && json.success) {
        //             console.log("Favorite successfully added")
        //         }
        //      })
        //      .catch(err => {
        //          console.log(err);
        //          // possibly display an error message on the frontend
        //      });
        // }
        return(
            <TherapistSearchContainer
            clientid={clientid}
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
    
    // let DesiredArray=ReviewArray
    // const isAuthenticated=props.authHook[0]
    const [TherapistSearch, setTherapistSearch]=useState({
        SearchName: '',
        SearchLocation: '',
        SearchSpecialty: ''
    })

    const [outcome, setOutcome] = useState([])
    const [handleClickTrigger, setHandleClickTrigger] = useState(true)
    const [emptySearchMessage, setEmptySearchMessage] = useState("Loading...")
    if (handleClickTrigger===true) {
        HandleClick();
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
        setHandleClickTrigger(false);
        setEmptySearchMessage("Sorry! We found no therapists matching your search.")
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

    if (outcome.length === 0){
        return(
            <div>
            <MenuBar TherapistSearch={TherapistSearch} clientid={clientid} setTherapistSearch={setTherapistSearch} onClick={HandleClick}/>
             <div className="landing-search-page-body">
             <div className='main-search-page-padder'>
                {/* console.log(outcome) */}
                 <h1>{emptySearchMessage}</h1>
             </div>               
             </div>
         </div>
        )
    }
    return(
        <div>
           <MenuBar TherapistSearch={TherapistSearch} clientid={clientid} setTherapistSearch={setTherapistSearch} onClick={HandleClick} />
            <div className="landing-search-page-body">
            <div className='main-search-page-padder'>
                {outcome.map(AddTherapist)}
            </div>               
            </div>
        </div>
    )
}

export {MainSearchPageLoggedIn, MainSearchPageNotLoggedIn};