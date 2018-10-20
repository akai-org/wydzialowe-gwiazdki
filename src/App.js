import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import './App.css';
import './fontLibrary';

import MainPage from './pages/MainPage';
import LecturePage from './pages/LecturePage';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/lecture" component={LecturePage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
