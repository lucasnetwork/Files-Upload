import React,{useState, useEffect, useContext} from 'react'
import {ButtonToggle} from './Button/Toggle'
import {Toggle} from './../../context'
import {api} from '../../services/api'
import './../../styles/aside.scss'
export default () => {
    const {visible,setGeneration}= useContext(Toggle)
    const [generations,setGenerations] = useState([])
    useEffect(() =>{
        async function getGenerations(){
            const generations = await api.get('generation')
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
                    <a href="/itens" key={generation._id} onClick={setGeneration(generation.name)}>
                        <li key={generation._id}>{generation.name}</li>
                    </a>
                ))}
            </nav>
        </aside>
    </>
)}