import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.scss';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
// import TailContainer from '../TailContainer';
import LectureContainer from '../LectureContainer';
import LoginContainer from '../LoginContainer';
import TeamContainer from '../TeamContainer';

const LayoutContainer = () => (
  <div className="LayoutContainer">
    <Header title="WydziałoweGwizadki" />
    <Router>
      <Switch>
        <Route exact path="/" component={LoginContainer} />
        <Route exact path="/Team" component={TeamContainer} />
        <Route path="/lecture/:id" component={LectureContainer} />
      </Switch>
    </Router>
    <Footer />
  </div>
);

export default LayoutContainer;
