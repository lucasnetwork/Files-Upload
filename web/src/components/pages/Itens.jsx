import React,{useState,useEffect} from 'react'
import axios from 'axios'
function Itens(){
    const [sprites,setSprites] = useState([])
    useEffect(() =>{
        async function getSprites(){
            const sprites = await axios.get("http://localhost:3333/sprite")
            setSprites([...sprites.data])
        }
        getSprites()
    },[])
    return(
        <>
            {sprites.map(sprite => (
                <article key={sprite._id}>
                    <p>{sprite.title}</p>
                    <p>{sprite.author}</p>
                    <p>{sprite.generation}</p>
                </article>
            ))}
        </>
    )
}
export default Itens