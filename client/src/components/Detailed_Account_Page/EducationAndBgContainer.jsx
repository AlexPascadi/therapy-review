import React from 'react'
import ReactDOM from 'react-dom'
import EducationAndBgSubtitle from './EducationAndBgSubtitle'
import EducationAndBackgroundContent from './EducationAndBackgroundContent'
import EducationAndBgTitle from './EducationAndBgTitle'
import {ReviewArray} from './DetailedAcountPageArrays'

function EducationAndBgContainer(props){
    const DesiredTitle=props.name.replace(/_/g,' ')
    const DesiredArray=ReviewArray.find((x)=>{return x.name===DesiredTitle})
    const DesiredSubtitle='About '+DesiredTitle
    debugger;
    return(
        <div className='education-and-background-container education-and-background-left-box'>
            <EducationAndBgTitle title={props.title}/>
            <EducationAndBgSubtitle subtitle={DesiredSubtitle}/>
            <EducationAndBackgroundContent content={DesiredArray.EducationAndBackgroundContent}/>
        </div>
    )
}

export default EducationAndBgContainer;