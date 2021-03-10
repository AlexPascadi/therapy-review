import React from 'react'
import ReactDOM from 'react-dom'
import {MyFavoritesArray} from './MyAccountPageArrays'
import FavoriteTherapistContainer from './FavoriteTherapistContainer'

function FavoritesAppender(TherapistObj){
    return(
        <FavoriteTherapistContainer 
            img={TherapistObj.img}
            alt={TherapistObj.alt}
            title={TherapistObj.title}
            subtitle={TherapistObj.subtitle}
            RatingAndReview={TherapistObj.RatingAndReview} />
    )
}

function MyFavoritesGenerator(props){
    function AccountPicker(AccountObj){
        return AccountObj.email===props.email
    }
    const DesiredArray = MyFavoritesArray.find(AccountPicker).myFavorites
    debugger;
    return(
        <div className='favorites-container'>
            {DesiredArray.map(FavoritesAppender)}
        </div>
    )
}

export default MyFavoritesGenerator;