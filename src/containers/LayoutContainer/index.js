import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.scss';

import PrivateRoute from '../../PrivateRouter';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TailContainer from '../TailContainer';
import LectureContainer from '../LectureContainer';
import LoginContainer from '../LoginContainer';

function LayoutContainer() {
  return (
    <div className="LayoutContainer">
      <Header title="WydziałoweGwizadki" />
      <Router>
        <Switch>
          <Route exact path="/" component={LoginContainer} />
          <PrivateRoute exact path="/subjects" component={TailContainer} />
          <PrivateRoute path="/lecture/:id" component={LectureContainer} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default LayoutContainer;
