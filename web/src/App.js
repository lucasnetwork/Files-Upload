import React,{useState, useEffect} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './styles/app.scss'

import {Context} from './context'

import {Aside,Footer,Header} from './components/layout'
import Main from './components/pages/Main'
import Itens from './components/pages/Itens'
import Adm from './components/pages/Adm'

function App() {  
  const [generation,setGeneration] = useState("")
  const [visible,setVisible] = useState(false)
  const [dark,setDark] = useState(false)
  useEffect(()=>{
    document.querySelector('body').className = `${(dark)?'dark':''}`
  },[dark])
  return (
    <>
    <Router >
      <Context.Provider value={{visible,setVisible,generation,setGeneration,dark,setDark}}>
        <Aside />
        <div id="visible" 
            onClick={() =>setVisible(false)}
            className={`${(visible)?"visibles":"avisible"}`} ></div>
          <Header />
            <main  className='main' >
                <Switch>
                    <Route path="/" exact component={Main}/>
                    <Route path="/itens" exact component={Itens}/>
                    <Route path="/adm" exact component={Adm}/>
                </Switch>
            </main>
            <Footer />
      </Context.Provider>
    </Router>
    </>
  );
}

export default App;
