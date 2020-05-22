import React from 'react';

//Views
import Login from './views/Login';
import Home from './views/Home';
import Signup from './views/Signup';

//Componentes
import Navigation from './components/Navigation';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  return (
    <React.Fragment>
          <Router>
          <Navigation />  
          <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/Login">
                <Login />
              </Route>
              <Route exact path="/Signup">
                <Signup />
              </Route>
            </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
