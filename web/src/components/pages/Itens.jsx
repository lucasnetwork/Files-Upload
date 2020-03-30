import React,{useState,useEffect,useContext} from 'react'
import {api} from './../../services/api'
import {Context} from '../../context'
import '../../styles/itens.scss'
function Itens(){
    const [sprites,setSprites] = useState([])
    const {generation} = useContext(Context)
    useEffect(() =>{
        async function getSprites(){
            const sprites = await api.get("sprite",{params:{name:generation}})
            setSprites(sprites.data)
        }
        getSprites()
    },[generation])
    return(
        <div className="sprite">
            {sprites.map(sprite =>(
                <article  key={sprite._id}>
                    <img src={api.get(`sprite/${sprite.img}`)} alt={sprite.title} />
                    <p>{sprite.title}</p>
                    <p>{sprite.author}</p>
                    <p>{sprite.generation}</p>
                </article>
            ))}
        </div>
    )
}
export default Itens