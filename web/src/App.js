import React,{useState} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './styles/app.scss'

import {Toggle} from './context'

import {Aside,Footer,Header} from './components/layout'
import Main from './components/pages/Main'
import Itens from './components/pages/Itens'
import Adm from './components/pages/Adm'

function App() {  
  const [generation,setGeneration] = useState("")
  const [visible,setVisible] = useState(false)
  return (
    <>
    <Router >
      <Toggle.Provider value={{visible,setVisible,generation,setGeneration}}>
        <Aside />
        <div id="visible" 
            onClick={() =>setVisible(false)}
            className={`${(visible)?"visibles":"avisible"}`} ></div>
          <Header />
            <main  className="main" >
                <Switch>
                    <Route path="/" exact component={Main}/>
                    <Route path="/itens" exact component={Itens}/>
                    <Route path="/adm" exact component={Adm}/>
                </Switch>
            </main>
            <Footer />
      </Toggle.Provider>
    </Router>
    </>
  );
}

export default App;
