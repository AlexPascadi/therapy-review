import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { MyFavoritesArray } from './MyAccountPageArrays'
import FavoriteTherapistContainer from './FavoriteTherapistContainer'



function MyFavoritesGenerator(props) {
    function FavoritesAppender(TherapistObj) {
        // const [TherapistRating, setTherapistRating] = useState(0)
        // const [promiseiscompleted, setPromiseiscompleted] = useState(false)
        // async function getData() {
        //     let response3 = await fetch("http://localhost:5000" + "/average_rating/therapist/" + TherapistObj.id).then((result) => result.json())
        //     setTherapistRating(response3)
        //     setPromiseiscompleted(true)
        // }
        // getData()
        // if (promiseiscompleted) {
            return (
                <FavoriteTherapistContainer
                    img={TherapistObj.image_location}
                    alt="Therapist Picture"
                    title={TherapistObj.first_name + ' ' + TherapistObj.last_name}
                    subtitle={TherapistObj.specialities}
                    RatingAndReview={TherapistObj.rating} />
            )
        // }
        // else {
        //     return (<h1>Loading....</h1>)
        // }
    }

    // function AccountPicker(AccountObj){
    //     return AccountObj.email===props.email
    // }
    // const DesiredArray = MyFavoritesArray.find(AccountPicker).myFavorites
    return (
        <div className='favorites-container'>
            {props.ArrayName.map(FavoritesAppender)}
        </div>
    )
}

export default MyFavoritesGenerator;