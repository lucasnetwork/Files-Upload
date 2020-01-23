import React,{useState, useEffect, useContext} from 'react'
import {ButtonToggle} from './Button/Toggle'
import {Toggle} from './../../context'
import axios from 'axios'
import './../../styles/aside.scss'
export default () => {
    const {visible}= useContext(Toggle)
    const [generations,setGenerations] = useState([])
    useEffect(() =>{
        async function getGenerations(){
            const generations = await axios.get('http://localhost:3333/generation')
            setGenerations([...generations.data])
        }
        getGenerations()
    })

    return (
    <>
        <aside className={`aside ${(visible) ? "visible":""}`}  >
            <ButtonToggle/>
            <nav>
                {generations.map(generation=>(
                    <li key={generation._id}>
                        {generation.name}
                    </li>
                ))}
            </nav>
        </aside>
    </>
)}