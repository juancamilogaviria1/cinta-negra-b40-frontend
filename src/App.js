import React from 'react';




//Componentes
import Navigation from './components/Navigation';

import { container, Container } from 'reactstrap';
import {  BrowserRouter as Router, Switch } from "react-router-dom";

import Routes from './Routes';

function App() {
  return (
    <React.Fragment>
          <Router>
          <Navigation />  
          <Container className="mt-4">
            <Switch>
              { Routes }
            </Switch>
          </Container> 
      </Router>
    </React.Fragment>
  );
}

export default App;
