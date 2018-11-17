import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import './App.scss';
import './fontLibrary';

import LayoutContainer from './containers/LayoutContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={LayoutContainer} />
        </Switch>
      </Router>
    );
  }
}

export default App;
