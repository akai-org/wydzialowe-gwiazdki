// import React from 'react';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../../PrivateRouter.js';
import './index.scss';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TailContainer from '../TailContainer';
import LectureContainer from '../LectureContainer';
import LecturePageContainer from '../LecturePageContainer';
import LoginContainer from '../LoginContainer';
import Registration from '../Registration';
import TeamContainer from '../TeamContainer';
import LostPassContainer from '../LostPassContainer';

function LayoutContainer() {
  return (
    <div className="LayoutContainer">
      <Header title="WydziałoweGwizadki" />
      <Router>
        <Switch>
          <Route exact path="/" component={LoginContainer} />
          <Route exact path="/register" component={Registration} />
          <Route exact path="/team" component={TeamContainer} />
          <Route exact path="/lostPass" component={LostPassContainer} />
          <PrivateRoute path="/mainpage" component={TailContainer} />
          <PrivateRoute path="/lecture/:id" component={LectureContainer} />
          <PrivateRoute path="/lecturePage" component={LecturePageContainer} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default LayoutContainer;
