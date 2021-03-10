import React from "react"
import ReactDOM from "react-dom"

function FormButton(props){
    return(
            <button className="form-button" type="submit"> 
                <p className="subtitle buttontext">{props.buttontext}</p>
            </button>
    )
}

export default FormButton;