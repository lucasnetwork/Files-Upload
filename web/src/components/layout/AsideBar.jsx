import React,{useState, useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import {ButtonToggle} from './Button/Toggle'
import {Context} from './../../context'
import {api} from '../../services/api'
import './../../styles/aside.scss'
export default () => {
    const {visible,setGeneration,dark}= useContext(Context)
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
        <aside className={`aside ${(visible) ? "visible":""} ${(dark) ?'dark aside-dark' :'aside-light'}`}  >
            <ButtonToggle/>
            <nav>
                {generations.map(generation=>(
                    <Link to="/itens" key={generation._id} onClick={setGeneration(generation.name)}>
                        <li key={generation._id}>{generation.name}</li>
                    </Link>
                ))}
            </nav>
        </aside>
    </>
)}