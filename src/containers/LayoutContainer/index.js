import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.scss';

import PrivateRoute from '../../PrivateRouter';
import { firebase } from '../../firebase';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TailContainer from '../TailContainer';
import LectureContainer from '../LectureContainer';
import LoginContainer from '../LoginContainer';

class LayoutContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      authenticated: false,
      currentUser: null
    };
  }

  UNSAFE_componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          loading: false,
          authenticated: true,
          currentUser: user
        });
      } else {
        this.setState({
          loading: false,
          authenticated: false,
          currentUser: null
        });
      }
    });
  }

  render() {
    const { authenticated, loading } = this.state;

    if (loading) {
      return '';
    }
    return (
      <div className="LayoutContainer">
        <Header title="WydziałoweGwizadki" />
        <Router>
          <Switch>
            <Route exact path="/" component={LoginContainer} />
            <PrivateRoute
              exact
              path="/subjects"
              component={TailContainer}
              authenticated={authenticated}
            />
            <PrivateRoute
              path="/lecture/:id"
              component={LectureContainer}
              authenticated={authenticated}
            />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default LayoutContainer;
