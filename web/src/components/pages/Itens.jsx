import React,{useState,useEffect,useContext} from 'react'
import axios from 'axios'
import {Toggle} from '../../context'
import '../../styles/itens.scss'
function Itens(){
    const [sprites,setSprites] = useState([])
    const {generation} = useContext(Toggle)
    useEffect(() =>{
        async function getSprites(){
            const sprites = await axios.get("http://localhost:3333/sprite",{params:{name:generation}})
            setSprites([...sprites.data])
        }
        getSprites()
    },[generation])
    return(
        <>
            {sprites.map(sprite => (
                <article className="sprite" key={sprite._id}>
                    <p>{sprite.title}</p>
                    <p>{sprite.author}</p>
                    <p>{sprite.generation}</p>
                </article>
            ))}
        </>
    )
}
export default Itens