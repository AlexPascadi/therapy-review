import React from "react"
import ReactDOM from "react-dom"
import {PasswordFormEntry, FormEntry} from "./FormEntry"
import FormTitle from "./FormTitle"
import FormButton from "./FormButton"
import {Form_one_Entries,Form_two_Entries} from "./FormEntries"

function RenderFormEntries(element){
    return(
        <FormEntry key= {element.key} title={element.FieldName} />
    )
    
}

function FormEntryContainer(props){
    return(
        <div className="form-entry-container">
            <FormTitle title={props.title} />
            {props.arrayName.map(RenderFormEntries)}
            <PasswordFormEntry />
            <FormButton buttontext={props.buttontext} />            
            </div>
    )
}

export default FormEntryContainer;