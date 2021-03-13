import React from 'react'
import ReactDOM from 'react-dom'
import MenuBarTitle from './MenuBarTitle'
import MenuBarSearchBar from './menuBarSearchBar'
import { MenuBarLoginButton, MenuBarLoggedInButton } from './MenuBarLoginButton'
import {Link} from 'react-router-dom'

function MenuBar(props) {
    return (
        <div className="menu-bar">
            <MenuBarTitle text='Smart Therapy' clientid={props.clientid}/>
            <MenuBarSearchBar TherapistSearch={props.TherapistSearch} onClick={props.onClick} setTherapistSearch={props.setTherapistSearch} defaulttext="Search by name, location or keyword" />
            <MenuBarLoginButton clientid={props.clientid}/>
        </div>
    )
}

function MenuBarWithoutSearchBar(props) {
    return (
        <div className="menu-bar">
            <MenuBarTitle text='Smart Therapy' clientid={props.clientid}/>
            {/* <MenuBarSearchBar TherapistSearch={props.TherapistSearch} onClick={props.onClick} setTherapistSearch={props.setTherapistSearch} defaulttext="Search by name, location or keyword" /> */}
            <MenuBarLoginButton clientid={props.clientid} />
        </div>
    )
}

function LoggedInMenuBar(props) {
    return (

        <div className="menu-bar">
            <MenuBarTitle text='Smart Therapy' clientid={props.clientid}/>
            <MenuBarSearchBar TherapistSearch={props.TherapistSearch} onClick={props.onClick} setTherapistSearch={props.setTherapistSearch} defaulttext="Search by name, location or keyword" />
            <MenuBarLoggedInButton clientid={props.clientid}/>
        </div>

    )
}

function LoggedInMenuBarWithoutSearchBar(props) {
    return (
        <div className="menu-bar">
            <MenuBarTitle text='Smart Therapy' clientid={props.clientid}/>
            {/* <MenuBarSearchBar TherapistSearch={props.TherapistSearch} onClick={props.onClick} setTherapistSearch={props.setTherapistSearch} defaulttext="Search by name, location or keyword" /> */}
            <MenuBarLoggedInButton clientid={props.clientid} />
        </div>
    )
}

export { MenuBar, MenuBarWithoutSearchBar, LoggedInMenuBar, LoggedInMenuBarWithoutSearchBar };