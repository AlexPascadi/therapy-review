import React from 'react'
import ReactDOM from 'react-dom'
import {ReviewArray} from './DetailedAcountPageArrays'
import EducationAndBackgroundContent from './EducationAndBackgroundContent'
import EducationAndBgTitle from './EducationAndBgTitle'

function AdditionalInfoGenerator(item){
    return(
            <EducationAndBackgroundContent content={item} />
    )
}
function EducationAndBgAdditionalInfo(props){
    const DesiredTitle=props.name.replace(/_/g,' ')
    function ElementPicker(element){
        return element.name===DesiredTitle
    }
    const Property = props.ArrayName
    const DesiredArray=ReviewArray.find(ElementPicker)[Property]
    return(
        <div>
            <EducationAndBgTitle title={props.title}/>
            {DesiredArray.map(AdditionalInfoGenerator)}
        </div>
    )
}

export default EducationAndBgAdditionalInfo;