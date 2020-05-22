import React from 'react';
import Login from './views/Login';
import Home from './views/Home';

//Componentes
import Navigation from './components/Navigation';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Router>
      <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
   </Router>

    </React.Fragment>
    
   
  );
}

export default App;
