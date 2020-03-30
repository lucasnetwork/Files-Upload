import React,{useState,useContext,useEffect} from 'react'
import {api} from '../../services/api'
import '../../styles/adm.scss'
import {Context} from '../../context'
import {useHistory} from 'react-router-dom'
export default () => {
    const history = useHistory()
    const user = JSON.parse(localStorage.getItem('user'))
    const [title,setTitle] = useState("")
    const [author,setAuthor] = useState((user)? user.user : "")
    const [category,setCategory] = useState("")
    const [file,setFile] = useState("")
    const {dark} = useContext(Context)
    function handleSubmit(e){
        e.preventDefault()
        const form = new FormData()
        form.append('file',file)
        form.append('title',title)
        form.append('author',author)
        form.append('category',category)
        api.post('sprite',form,{
            header:{
                'Content-type': `multipart/form-data; boundary=${form._boundary}`
            },
        })
    }
    useEffect(()=>{
        
        async function token(){
            try{
                await api.post("ValidateToken",{},{
                    headers:{
                        authorization: JSON.parse(localStorage.getItem('user')).token || ""
                    }
                })
            }catch(e){
                history.push('/login')
            }
        }
        token()
    },[])
    return(
        <>
            <form className={`form ${(dark)?'input-dark':''}`}>
                <label>Nome</label>
                <input type="text" name="title"  required onChange={(e) => setTitle(e.target.value)} value={title}/>
                
                <label>Autor</label>
                <input type="text" name="author"onChange={(e) => setAuthor(e.target.value)}  required  value ={author} disabled/>
                
                <label>Tipo</label>
                <input type="text" name="categoria"  required onChange={(e) => setCategory(e.target.value)} value={category} />
                
                <label >Arquivo</label>
                <input type="file"  name="file" required onChange={(e) => {setFile(e.target.files[0])}}/>
                <button className="form-button" onClick={handleSubmit}>Enviar</button>
            </form>
        </>
    )
}