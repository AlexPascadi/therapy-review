import React from "react"
import ReactDOM from "react-dom"
import {PasswordFormEntry, FormEntry} from "./FormEntry"
import FormTitle from "./FormTitle"
import FormButton from "./FormButton"
import {Form_one_Entries,Form_two_Entries} from "./FormEntries"

// function RenderFormEntries(element){
//     return(
//         <FormEntry key= {element.key} title={element.FieldName} />
//     )
    
// }





function FormLoginEntryContainer(props){
    function handleLoginChange(event){
        // let TherapistSearch=props.TherapistSearch
        const newValue= event.target.value
        const inputName=event.target.name
        props.setLoginInput(prevValue=>{
            if(inputName=='Email'){
                return(
                    {
                        email:newValue,
                        password:prevValue.password
    
                    }
                )
            }
            else if(inputName=='Password'){
                return(
                    {
                        email:prevValue.email,
                        password:newValue
                    }
                )
            }
        })
    
    }
    return(
        <div className="form-entry container">
            <FormTitle title="Login" />
            <div>
                <label className="formlabel">Email</label>
                <input name= 'Email' type="text" placeholder="Email" className="form-entry" onChange={handleLoginChange}/>
            </div>
            <div>
                <label className="formlabel">Password </label>
                <input name='Password' type="text" type='password' placeholder="Password" className="form-entry" onChange={handleLoginChange}/>
            </div>
            {/* <PasswordFormEntry handleChange={props.handleChange} inputType="password" /> */}
            <FormButton buttontext={props.buttontext} onClick={props.onClick} />
        </div>
    )
}

function FormRegisterEntryContainer(props){
    function handleRegisterChange(event){
        // let TherapistSearch=props.TherapistSearch
        const newValue= event.target.value
        const inputName=event.target.name
        props.setRegisterInput(prevValue=>{
            if(inputName=='Full Name'){
                return(
                    {
                        FullName:newValue,
                        email:prevValue.email,
                        password:prevValue.password
    
                    }
                )
            }
            else if(inputName=='Email'){
                return(
                    {
                        FullName:prevValue.FullName,
                        email:newValue,
                        password:prevValue.password
    
                    }
                )
            }
            else if(inputName=='Password'){
                return(
                    {
                        FullName:prevValue.FullName,
                        email:prevValue.email,
                        password:newValue
    
                    }
                )
            }
        })
    
    }
    
    return(
        <div className="form-entry container">
        <FormTitle title="Register" />
            <div>
                <label className="formlabel">Full Name </label>
                <input name='Full Name' type="text" placeholder="Full Name" className="form-entry" onChange={handleRegisterChange}/>
            </div>
            <div>
                <label className="formlabel">Email</label>
                <input name='Email' type="text" placeholder="Email" className="form-entry" onChange={handleRegisterChange}/>
            </div>
            <div>
                <label className="formlabel">Password</label>
                <input name='Password' type="text" type='password' placeholder="Password" className="form-entry" onChange={handleRegisterChange}/>
            </div>
            
            <FormButton buttontext={props.buttontext} onClick={props.onClick} />
        </div>
    )
}

export {FormLoginEntryContainer, FormRegisterEntryContainer}