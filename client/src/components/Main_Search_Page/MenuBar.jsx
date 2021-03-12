import React from 'react'
import ReactDOM from 'react-dom'
import MenuBarTitle from './MenuBarTitle'
import MenuBarSearchBar from './menuBarSearchBar'
import MenuBarLoginButton from './MenuBarLoginButton'

function MenuBar(props){
    return(
        <div className="menu-bar">
            <MenuBarTitle text='Smart Therapy' />
            <MenuBarSearchBar TherapistSearch={props.TherapistSearch} onClick={props.onClick} setTherapistSearch={props.setTherapistSearch} defaulttext="Search by name, location or keyword" />
            <MenuBarLoginButton  clientid={props.clientid} isAuthenticated={props.isAuthenticated}/>
        </div>
    )
}

export default MenuBar;