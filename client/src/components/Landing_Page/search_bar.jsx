import React, {useState} from 'react';
import ReactDOM from 'react-dom';   
import SearchSymbol from '../images/Vector.jpg' 
import SearchIcon from '../images/search-icon.svg'


function Search_Bar(props){

    const [TherapistSearch, setTherapistSearch]=useState({
        SearchName: '',
        SearchLocation: '',
        SearchSpecialty:''
    })

    function HandleChange(event){
        const newValue= event.target.value
        const inputName=event.target.name
        setTherapistSearch(prevValue=>{
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
        <div className='search-bar-container'>
            <input name='SearchName'type="text" className="search-name" placeholder="Search by name" style={{fontFamily:'Playfair Display', fontSize: '24px'}} onChange={HandleChange}/>
            <input name='SearchLocation' type="text" className="search-location" placeholder="Location" style={{fontFamily: 'Playfair Display', fontSize: '24px'}} onChange={HandleChange}/>
            <input name='SearchSpecialty' type="text" className="search-specialty" placeholder="Specialties" style={{fontFamily: 'Playfair Display', fontSize: '24px'}} onChange={HandleChange}/>
            <button type="button" className="search-icon">
                <img className="search-btn" src={SearchIcon} alt="Search button" />
            </button>
        </div>
        // <div className="wrap">
        //     <div className="searchdiv">
        //         <input type="text" className="searchbar" placeholder={props.defaulttext} />
        //         <button type="submit" className="searchButton">
        //             {/* <i className="fa fa-search"></i> */}
        //             <img src={SearchSymbol} alt='search symbol'/>
        //         </button>
        //     </div>
        // </div>
    )
}

export default Search_Bar;