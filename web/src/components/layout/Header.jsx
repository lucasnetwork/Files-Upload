import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/header.scss'
import {ButtonToggle} from './Button/Toggle'
export default () =>(
    <header className="header">
        <ButtonToggle/>
        <img src="https://www.spriters-resource.com/resources/images/light/header/logo.png" alt="Sprites"/>
        <nav>
            <Link >
                <li>Home</li>
            </Link>
            <Link >
                <li>Forum</li>
            </Link>
            <Link >
                <li>Seach</li>
            </Link>
            <li>Community</li>
        </nav>
    </header>
)