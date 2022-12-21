import logo from './logo.svg';
import './App.css';

import {Home} from './Home';
import {Individe} from './Individe';
import {Klienti} from './Klienti';
import {Navigation} from './Navigation';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <h3 className="m-3 d-flex justify-content-center">
        Blej sigurim per
      </h3>

      <Navigation/>

      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/Individe' component={Individe} />
        <Route path='/Klienti' component={Klienti} />
      
      
      </Switch>
    
    
    
    
    
    </div>
    </BrowserRouter>
  );
}

export default App;
