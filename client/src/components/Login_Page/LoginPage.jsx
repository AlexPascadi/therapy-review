import React from "react"
import ReactDOM from "react-dom"
import FormEntryContainer from "./FormEntryContainer"
import {Form_one_Entries, Form_two_Entries} from "./FormEntries"

function LoginPage(){

    return(
        <div className="form-container">
         <div className="form-entry-container">
            <FormEntryContainer title="Log in" arrayName={Form_one_Entries} buttontext="Sign in" />           
            </div>
            <div className="form-entry-container">
            <FormEntryContainer title="Sign Up" arrayName={Form_two_Entries} buttontext="Register" />
                
            </div>
        </div>
    )
}


export default LoginPage;