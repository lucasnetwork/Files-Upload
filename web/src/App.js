import React,{useState, useEffect} from 'react';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom'
import './styles/app.scss'

import {Context} from './context'
import {api} from './services/api'
import {Aside,Footer,Header} from './components/layout'
import {Adm,Login,Itens,Main} from './components/pages'
 


function App() {  
  const [generation,setGeneration] = useState("")
  const [visible,setVisible] = useState(false)
  const [dark,setDark] = useState(false)
  const [logiin,setLogiin] = useState(false)
  const [authenticate,setAuthenticate] = useState(true)
  useEffect(()=>{
    document.querySelector('body').className = `${(dark)?'dark':''}`
  },[dark])
  // async function authenticateToken(){
  //   // console.log(localStorage)
  //   const a = JSON.parse(localStorage.user)
  //   // console.log(a)
  //   const response = await api.post("ValidateToken",a,{headers:{authorization:a.token}})
  //   if(response.data){
  //     console.log(response.data)
  //     setAuthenticate(true)
  //     return true
  //   }else{
  //     setAuthenticate(false)
  //     return false
  //   }
  // }
  
  // const PrivateRoute = ({component:Component, ...rest}) =>(
  //     <Route {...rest} render= {(props) =>{
  //       // console.log(authenticate)
  //       return(
  //         authenticateToken() ? (
  //         <Component {...props}/>)
  //         :(
  //           <Redirect to={{pathname:'/',state:{from:props.location}}}/>
  //         )
  //       )}
  //     }/>
  //   )
  return (
    <>
    <Router >
      <Context.Provider value={{visible,setVisible,generation,setGeneration,dark,setDark,logiin,setLogiin}}>
        <Aside />
        <div id="visible" 
            onClick={() =>setVisible(false)}
            className={`${(visible)?"visibles":"avisible"}`} ></div>
          <Header />
            <main  className='main' >
                <Switch>
                    <Route path="/" exact component={Main}/>
                    <Route path="/itens" exact component={Itens}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/adm" component={Adm}/>
                </Switch>
            </main>
            <Footer />
      </Context.Provider>
    </Router>
    </>
  );
}

export default App;
