import React, { Component, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { db, firebase } from './firebase';
import './App.scss';
import './fontLibrary';

import LayoutContainer from './containers/LayoutContainer';
import AdminLayoutContainer from './admin/AdminLayoutContainer';
import PrivateRoute from './PrivateRouter';
import NoMatch from './containers/NoMatch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdmin: false
    };
    this.checkAdmin = this.checkAdmin.bind(this);
  }

  componentDidMount() {
    console.log('teraz');
    firebase.auth().onAuthStateChanged(
      (user) => {
        db.ref(`/users/${  user.uid}`)
          .once('value')
          .then(b => {
            const isAdmin = b.val().admin;
            this.checkAdmin(isAdmin);
          });
      }
    );
  }

  checkAdmin(val) {
    this.setState({
      isAdmin: val
    });
  }

  render() {
    console.log(this.state.isAdmin);
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LayoutContainer} />
          <Route path="/register" component={LayoutContainer} />
          <Route path="/team" component={LayoutContainer} />
          <Route path="/lostPass" component={LayoutContainer} />
          <Route path="/mainpage" component={LayoutContainer} />
          <Route path="/lecture/:id" component={LayoutContainer} />
          <Route path="/lecturePage" component={LayoutContainer} />
          {this.state.isAdmin === true ? (
            <PrivateRoute path="/admin" component={AdminLayoutContainer} />
          ) : (
            'Inicialize'
          )}
          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
