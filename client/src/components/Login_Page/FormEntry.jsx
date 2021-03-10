import React from 'react'
import ReactDOM from 'react-dom'

function FormEntry(props){
    return(
        <div>
            <label className="formlabel">{props.title} </label>
            <input type="text" placeholder={props.title} className="form-entry"/>
        </div>
    )
}

function PasswordFormEntry(){
    return(
        <div>
            <label className='formlabel'>Password</label>
            <input type='password' placeholder='Password' className='form-entry' />
        </div>
    )
}

export {PasswordFormEntry,FormEntry};