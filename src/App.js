import React from 'react';
import "./App.css";
import AboutUs from './components/screens/aboutus';
import Nav from './components/navigations/navbar';
import Home from './components/screens/home';
import Register from './components/screens/register'
import Dashboard from './components/screens/dashboard'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const sayHello = () => {
  console.log("Hello")
} 

function App(){
  return(
    <Router>    
      <div className="Nav">
        <Nav />
      </div>
      <Switch>
        <Route path="/" exact component={Home} /> 
        <Route path="/register" component={Register} />
        <Route path="/about" component={AboutUs} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>

  )
}

export default App;
