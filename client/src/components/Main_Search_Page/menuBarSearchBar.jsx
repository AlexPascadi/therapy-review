import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import SearchSymbol from '../images/Vector.jpg' 

function MenuBarSearchBar(props){
    

    function HandleChange(event){
        // let TherapistSearch=props.TherapistSearch
        const newValue= event.target.value
        const inputName=event.target.name
        props.setTherapistSearch(prevValue=>{
            if(inputName=='SearchName'){
                return(
                    {
                        SearchName: newValue,
                        SearchLocation: prevValue.SearchLocation,
                        SearchSpecialty:prevValue.SearchSpecialty
    
                    }
                )
            }
            else if(inputName=='SearchLocation'){
                return(
                    {
                        SearchName: prevValue.SearchName,
                        SearchLocation: newValue,
                        SearchSpecialty:prevValue.SearchSpecialty
                    }
                )
            }
            else if(inputName=='SearchSpecialty'){
                return(
                    {
                        SearchName:prevValue.SearchName,
                        SearchLocation:prevValue.SearchLocation,
                        SearchSpecialty:newValue
                    }
                )
            }
        })
    
    }
    return(
        <div className='search-bar-container menu-bar-search-bar'>
            <input name='SearchName' type="text" className="search-name" placeholder="Search by name" style={{fontFamily:'Playfair Display', fontSize: '24px'}} onChange={HandleChange}/>
            <input name='SearchLocation' type="text" className="search-location" placeholder="Location" style={{fontFamily: 'Playfair Display', fontSize: '24px'}} onChange={HandleChange}/>
            <input name='SearchSpecialty' type="text" className="search-specialty" placeholder="Specialties" style={{fontFamily: 'Playfair Display', fontSize: '24px'}} onChange={HandleChange}/>
            <button type="button" className="search-icon">
                <img className="search-btn" src={SearchSymbol} alt="Search button" />
            </button>
        </div>
    )
}

export default MenuBarSearchBar;