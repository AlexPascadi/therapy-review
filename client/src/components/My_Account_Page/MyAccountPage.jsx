import React from 'react'
import ReactDOM from 'react-dom'
import MenuBar from '../Main_Search_Page/MenuBar'
import Styledhr from '../Detailed_Account_Page/Styledhr'
import TherapistSearchSubtitle from '../Main_Search_Page/TherapistSearchSubtitle'
import MyFavoritesGenerator from './MyFavoritesGenerator'

function MyAccountPage(props){
    return(
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
                        <TherapistSearchSubtitle text={props.username} />
                    </div>
                    <div className='user-detail-field-container'>
                        <TherapistSearchSubtitle text='Email:' />
                        <TherapistSearchSubtitle text={props.email} />
                    </div>
                    <div className='user-detail-field-container'>
                        <TherapistSearchSubtitle text='Password:' />
                        <TherapistSearchSubtitle text={props.password} />
                    </div>
                </div>
                <div className='my-account-page-subtitle-container'>
                    <TherapistSearchSubtitle text='My Favorites' />
                </div>
                <Styledhr />
                <MyFavoritesGenerator email={props.email}/>
            </div>
        </div>
    )
}

export default MyAccountPage;