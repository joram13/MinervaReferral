import React from 'react';
import './App.css';
import { Toolbar } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Pages
import { Companies, Home, UserScreen } from './Pages'
//components
import { Navbar } from './Components';


//This is the routing backbone of the single page app. Each path renders any amount of elements under the path
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <br />
            <Home />
          </Route>

          <Route path='/companies'>
            <Companies />
          </Route>

          <Route path='/user/:id/'>
            <UserScreen />
          </Route>

        </Switch>
      </div>
    </Router>

  );
}

export default App;
