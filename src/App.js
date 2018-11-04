import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import './App.scss';
import './fontLibrary';

import MainPage from './pages/MainPage';
import LecturePage from './pages/LecturePage';
import LayoutContainer from './containers/LayoutContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/lecture/:id" component={LecturePage} />
          <Route path="/layout" component={LayoutContainer} />
        </Switch>
      </Router>
    );
  }
}

export default App;
