import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';
import './fontLibrary';

// import LayoutContainer from './containers/LayoutContainer';
import authFunc from './Auth';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={authFunc} />
        </Switch>
      </Router>
    );
  }
}

export default App;
