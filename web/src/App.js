import React,{useState} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './styles/app.scss'

import {Toggle} from './context'

import {Aside,Footer,Header} from './components/layout'
import Main from './components/pages/Main'
import Itens from './components/pages/Itens'
function App() {  
  const [visible,setVisible] = useState(false)
  return (
    <>
    <Router>
      <Toggle.Provider value={{visible,setVisible}}>
        <Aside />
        <Header />
      </Toggle.Provider>
          <main className="main">
              <Switch>
                  <Route path="/" exact component={Main}/>
                  <Route path="/itens" exact component={Itens}/>
              </Switch>
          </main>
          <Footer />
    </Router>
    </>
  );
}

export default App;
