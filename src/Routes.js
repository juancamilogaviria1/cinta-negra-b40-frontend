import React from 'react';
import { Route } from 'react-router-dom';

//Views
import Login from './views/Login';
import Home from './views/Home';
import Signup from './views/Signup';


export default [
    <React.Fragment>
        <Route exact path="/" component={ Home}></Route>
        <Route exact path="/Login" component={ Login }></Route>
        <Route exact path="/Signup" component={ Signup }></Route>
    </React.Fragment>
]