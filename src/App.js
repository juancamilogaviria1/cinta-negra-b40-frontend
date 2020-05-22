import React from 'react';




//Componentes
import Navigation from './components/Navigation';


import {  BrowserRouter as Router, Switch } from "react-router-dom";

import Routes from './Routes';

function App() {
  return (
    <React.Fragment>
          <Router>
          <Navigation />  
          <Switch>
             { Routes }
            </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
