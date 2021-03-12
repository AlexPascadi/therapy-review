import React,{useState} from "react"
import ReactDOM from "react-dom"
import FormEntryContainer from "./FormEntryContainer"
import {Form_one_Entries, Form_two_Entries} from "./FormEntries"

function LoginPage(){
    const [fullName, setfullName]=useState('')
    const [email, setemail]=useState('')
    const[password, setPassword]=useState('')
    function HandleClick(){
        let _data={
            first_name: "Max",
            last_name: "Lisbon",
            email: "maxlisbon@hotmail.com",
            password: "butterfly"
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: JSON.stringify(_data),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => response.json()) 
        .then(json => console.log(json));
    }
    return(
        <div className="form-container">
         <div className="form-entry-container">
            <FormEntryContainer title="Log in" arrayName={Form_one_Entries} buttontext="Sign in" onClick={HandleClick}/>           
            </div>
            <div className="form-entry-container">
            <FormEntryContainer title="Sign Up" arrayName={Form_two_Entries} buttontext="Register" />
                
            </div>
        </div>
    )
}


export default LoginPage;