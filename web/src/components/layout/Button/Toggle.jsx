import React,{useContext} from 'react'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Context} from './../../../context'
export const ButtonToggle = (props)=>{
    const {visible,setVisible} = useContext(Context)
    return(
        <i className="buttonToggle" onClick={() => setVisible(!visible)}>
            <FontAwesomeIcon size="2x" icon={faBars} className="name"/>
        </i>
    )
}