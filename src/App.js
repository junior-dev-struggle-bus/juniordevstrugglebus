import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import 'bootstrap';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './css/socicon.css';
import './css/iconsmind.css';
import './css/interface-icons.css';
import './css/lightbox.min.css';
import './css/theme.css';
import './css/custom.css';

import Home from './components/Home/';
import Header from './components/Header/Header';
import Resources from './components/Resources/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header hi="hello" link={Link} />
          <Route path="/" exact component={Home} />
          <Route path="/resources" exact component={Resources} />
        </Router>
      </div>
    );
  }
}

export default App;
