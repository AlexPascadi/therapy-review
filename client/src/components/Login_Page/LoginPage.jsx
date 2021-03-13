import React,{useState,useEffect} from "react"
import ReactDOM from "react-dom"
import {FormRegisterEntryContainer,FormLoginEntryContainer} from "./FormEntryContainer"
import {Form_one_Entries, Form_two_Entries} from "./FormEntries"
import {Redirect} from 'react-router-dom'

function LoginPage(props){
    const [LoginInput, setLoginInput]=useState({
        email:'',
        password:''
    })

    const [RegisterInput, setRegisterInput]=useState({
        FullName:'',
        email:'',
        password:''
    })
    const cId=0
    const [clientId,setClientId]=useState(0);
    const [buttonclicked,setButtonClicked]=useState(false)

    // const [fullName, setFullName] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    // const handleChange = (event, inputType) => {
    //     const value = event.target.value;
    //     if (inputType === 'name') {
    //         setFullName(value)
    //     } 

    //     else if (inputType === 'password') {
        
           
    //         setPassword(value)
    //     }

    //     else {
    //         setEmail(value)
    //     }
    // }


    // function HandleChange(event){
    //     // let TherapistSearch=props.TherapistSearch
    //     const newValue= event.target.value
    //     const inputName=event.target.name
    //     props.setTherapistSearch(prevValue=>{
    //         if(inputName=='SearchName'){
    //             return(
    //                 {
    //                     SearchName: newValue,
    //                     SearchLocation: prevValue.SearchLocation,
    //                     SearchSpecialty:prevValue.SearchSpecialty
    
    //                 }
    //             )
    //         }
    //         else if(inputName=='SearchLocation'){
    //             return(
    //                 {
    //                     SearchName: prevValue.SearchName,
    //                     SearchLocation: newValue,
    //                     SearchSpecialty:prevValue.SearchSpecialty
    //                 }
    //             )
    //         }
    //         else if(inputName=='SearchSpecialty'){
    //             return(
    //                 {
    //                     SearchName:prevValue.SearchName,
    //                     SearchLocation:prevValue.SearchLocation,
    //                     SearchSpecialty:newValue
    //                 }
    //             )
    //         }
    //     })
    
    // }
    const [isRegisterSuccess, setIsRegisterSuccess] = useState(null);
    const [isLoginSuccess, setIsLoginSuccess]=useState(false)

    function HandleRegisterClick(){
        let DesiredArray=RegisterInput.FullName.split(' ')
        let _data={
            first_name: DesiredArray[0],
            last_name: DesiredArray[1],
            email: RegisterInput.email,
            password: RegisterInput.password
        }
        // const response = await fetch(....)
        // const json = await response.json()

        // if (json && json..success)
        fetch("http://localhost:5000"+"/clients", {
            method: "POST",
            body: JSON.stringify(_data),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => response.json()) 
        .then(json => {
            console.log(json)

            if (json && json.success) {
                setIsRegisterSuccess(true);
            }
         })
         .catch(err => {
             console.log(err);
             // possibly display an error message on the frontend
             setIsRegisterSuccess(false);
         });
    }

    // useEffect(()=>{
        
        
    // },buttonclicked)

    function HandleLoginClick(){
        // console.log("beginning of function")
        fetch('http://localhost:5000'+'/clients/email/'+LoginInput.email, {
            method: "GET",
            headers: {"Content-type": "application/json; charset=UTF-8"}
        }).then(response=> {
            // console.log("Received Response") 
            return(response.json())})
        .then(json=>
            {
                if(json && json.password==LoginInput.password){
                    setIsLoginSuccess(true)
                    // props.setisAuthenticated(true)
                    
                    // cId=json.id
                    // props.setClientid(json.id)
                    window.location.href='http://localhost:3000/clients/'+String(json.id)
                }
                else{
                    setIsLoginSuccess(false)
                }
            }).catch(err=> console.log(err))
           

            
            
        // setButtonClicked(!buttonclicked)
        // console.log(buttonclicked)
    }
    return(
        <div className="form-container">
         <div className="form-entry-container">
            <FormLoginEntryContainer setLoginInput={setLoginInput}  title="Log in" arrayName={Form_one_Entries} buttontext="Sign in" onClick={HandleLoginClick}/>           
            </div>
            <div className="form-entry-container">
           
            <FormRegisterEntryContainer setRegisterInput={setRegisterInput} title="Sign Up" arrayName={Form_two_Entries} buttontext="Register" onClick={HandleRegisterClick} />  
            </div>
            {
               isRegisterSuccess && <div>You registered successfully! Please continue to Login.</div>
           }
           {
               isRegisterSuccess === false && <div>Registration failed</div>
           }
           {/* {
                isLoginSuccess && <Redirect to={'/clients/'+ String(cId)} />
           } */}
           {
              //isLoginSuccess===false && <div>Login Failed</div> 
           }
        </div>
    )
}


export default LoginPage;