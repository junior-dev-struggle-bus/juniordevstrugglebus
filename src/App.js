import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
      <Route path="/" exact component ={Home}/>
      </Router>
      </div>
    );
  }
}

export default App;
