import React,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {api} from '../../services/api'
// import {Context} from '../../context'
export default ()=>{
    const history = useHistory()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confPassword,setConfPassword] = useState('')
    const [logiin,setLogin] = useState('')
    async function login (){
        if(password !== confPassword){
            console.log("senhas diferentes")
            return false
        }
        const response = await api.post('signin',{email,password})
        localStorage.clear()
        localStorage.setItem("user",JSON.stringify(response.data))
        setLogin(true)
        history.push('/adm')
        
    }
    return(
        <>
            <form className="form">
                <label htmlFor="email">Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                <label htmlFor="password">Senha</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                <label htmlFor="password">Confirme a Senha</label>
                <input type="password" onChange={(e) => setConfPassword(e.target.value)} value={confPassword}/>
            </form>
            <button onClick={login}> fasd</button>
        </>
    )
}
