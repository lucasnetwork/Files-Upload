import React,{useState} from 'react'
import {api} from '../../services/api'
import '../../styles/adm.scss'
export default () => {
    const [title,setTitle] = useState("")
    const [author,setAuthor] = useState("")
    const [generation,setGeneration] = useState("")
    const [file,setFile] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        const form = new FormData()
        form.append('file',file)
        form.append('title',title)
        form.append('author',author)
        form.append('generation',generation)
        api.post('sprite',form,{
            header:{
                'Content-type': `multipart/form-data; boundary=${form._boundary}`
            },
        })
    }
    return(
        <>
            <form className="form">
                <label>Nome</label>
                <input type="text" name="title"  required onChange={(e) => setTitle(e.target.value)} value={title}/>
                
                <label>Autor</label>
                <input type="text" name="author" required onChange={(e) => setAuthor(e.target.value)} vaue ={author}/>
                
                <label>Geração</label>
                <input type="text" name="generation"  required onChange={(e) => setGeneration(e.target.value)} value={generation}/>
                
                <label >Arquivo</label>
                <input type="file"  name="file" required onChange={(e) => {setFile(e.target.files[0])}}/>
            </form>
            <button onClick={handleSubmit}>Enviar</button>
        </>
    )
}