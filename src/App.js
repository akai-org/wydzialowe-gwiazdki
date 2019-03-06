import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';
import './fontLibrary';

import LayoutContainer from './containers/LayoutContainer';
import AdminLayoutContainer from './admin/AdminLayoutContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/admin" component={AdminLayoutContainer} />
          <Route path="/" component={LayoutContainer} />
        </Switch>
      </Router>
    );
  }
}

export default App;
