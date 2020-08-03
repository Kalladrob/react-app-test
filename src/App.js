import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Menu from './components/Home'
import CharacterCreation from './components/CharacterCreation/CharacterCreation.js'
import CharacterList from './components/CharacterList/CharacterList'

class App extends Component {
  
  render(){  
    return (
      <body>
        <h1 className="coa">Call of Adventure</h1>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Menu}/>
            <Route exact path="/CharacterList" component={CharacterList}/>
            <Route exact path="/CharacterCreation" component={CharacterCreation}/>
          </Switch>
        </BrowserRouter>
      </body>
    )
  }
}

export default App;
