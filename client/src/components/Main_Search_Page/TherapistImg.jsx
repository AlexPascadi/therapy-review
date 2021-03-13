import React from 'react'
import ReactDOM from 'react-dom'

// const [image,setImage]=useState('')
// import img from {image}


function TherapistImg(props){
    // const image=props.img.replace('..','public')
    // console.log(image)
    return(
        <img alt={props.alt} src={props.img} className="therapist-container-img"/>
    )
}

export default TherapistImg;