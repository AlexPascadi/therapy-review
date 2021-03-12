import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import MenuBar from '../Main_Search_Page/MenuBar'
import Styledhr from '../Detailed_Account_Page/Styledhr'
import TherapistSearchSubtitle from '../Main_Search_Page/TherapistSearchSubtitle'
import MyFavoritesGenerator from './MyFavoritesGenerator'

class MyAccountPage extends React.Component {
    constructor() {
        super()
        this.state = {
            clientObj: {},
            FavoritesArray: [],
            promiseiscompleted: false
        }

        // console.log(clientId)
    }
    componentDidMount() {
        const clientId = this.props.match.params.clientid
        const DesiredURL = '/clients/' + clientId
        fetch('http://localhost:5000' + DesiredURL, {
            method: "GET",
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => response.json())
            .then(clientObj => {
                if (clientObj) {
                    // setClientObj(json)
                    return fetch("http://localhost:5000" + "/favorites/client/" + clientId, {
                        method: "GET",
                        headers: { "Content-type": "application/json; charset=UTF-8" }
                    })
                        .then(response => response.json())
                        .then(fav => {
                            let flag;
                            if (fav) {
                                // setFavoritesArray(json)
                                // setPromiseiscompleted(true)
                                flag = true;
                                this.setState({
                                    clientObj: clientObj,
                                    FavoritesArray: fav,
                                    promiseiscompleted: true
                                })
                            }
                        })
                }
            })

    }
    // .catch(err => {
    //         console.log(err);
    //         // possibly display an error message on the frontend
    //         setPromiseiscompleted(false)
    //     });
    // let response=await fetch("http://localhost:5000" + DesiredURL).then((result)=>result.json())
    render() {
        if (this.state.promiseiscompleted) {
            console.log(this.state.clientObj)

            return (
                <div>
                    <div>
                        <MenuBar />
                    </div>
                    <div className='landing-search-page-body my-account-page-body'>
                        <div>
                            <h1 className='my-account-page-title'> My Account</h1>
                            <div className='my-account-page-subtitle-container'>
                                <TherapistSearchSubtitle text='My Account Details' />
                            </div>
                        </div>
                        <Styledhr />
                        <div className='user-details-container'>
                            <div className='user-detail-field-container'>
                                <TherapistSearchSubtitle text='Name:' />
                                <TherapistSearchSubtitle text={this.state.clientObj.first_name + ' ' + this.state.clientObj.last_name} />
                            </div>
                            <div className='user-detail-field-container'>
                                <TherapistSearchSubtitle text='Email:' />
                                <TherapistSearchSubtitle text={this.state.clientObj.email} />
                            </div>
                            {/* <div className='user-detail-field-container'>
                        <TherapistSearchSubtitle text='Password:' />
                        <TherapistSearchSubtitle text={props.password} />
                    </div> */}
                        </div>
                        <div className='my-account-page-subtitle-container'>
                            <TherapistSearchSubtitle text='My Favorites' />
                        </div>
                        <Styledhr />
                        <MyFavoritesGenerator ArrayName={this.state.FavoritesArray}/>
                    </div>
                </div>
            )
        }
        else {
            return (<h1>Loading...</h1>)
        }
    }
}

export default MyAccountPage;