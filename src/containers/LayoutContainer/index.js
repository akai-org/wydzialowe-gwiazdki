import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.scss';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TailContainer from '../TailContainer';
import LectureContainer from '../LectureContainer';
import LoginContainer from '../LoginContainer';
import Registration from '../Registration';
import TeamContainer from '../TeamContainer';

const LayoutContainer = () => (
  <div className="LayoutContainer">
    <Header title="WydziałoweGwizadki" />
    <Router>
      <Switch>
        <Route exact path="/" component={Registration} />
        <Route exact path="/register" component={Registration} />
        <Route path="/mainpage" component={TailContainer} />
        <Route exact path="/team" component={TeamContainer} />
        <Route path="/lecture/:id" component={LectureContainer} />
        <Route path="/login" component={LoginContainer} />
      </Switch>
    </Router>
    <Footer />
  </div>
);

export default LayoutContainer;
