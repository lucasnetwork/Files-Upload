import React,{useContext} from 'react'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Toggle} from './../../../context'
export const ButtonToggle = (props)=>{
    const {visible,setVisible} = useContext(Toggle)
    return(
        <i className="buttonToggle" onClick={() => setVisible(!visible)}>
            <FontAwesomeIcon size="2x" icon={faBars} className="name"/>
        </i>
    )
}