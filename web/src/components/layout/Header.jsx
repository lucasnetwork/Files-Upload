import React,{useContext} from 'react'
import {faSun,faMoon} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'
import '../../styles/header.scss'
import {ButtonToggle} from './Button/Toggle'
import {Context} from '../../context'
export default () =>{
    const {dark,setDark} = useContext(Context)

    return(
    <header className='header'>
        <ButtonToggle/>
        <h1>Data Sprite</h1>
        <nav >
            <Link to="/">
                <li>Home</li>
            </Link>
            <Link to="/adm" >
                <li>Adm</li>
            </Link>
        </nav>
        <i onClick={() =>setDark(!dark)}>
            <FontAwesomeIcon icon={(dark)? faMoon : faSun}/>
        </i>
    </header>
)}