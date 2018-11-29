import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.scss';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const TailContainer = lazy(() => import('../TailContainer'));
const LectureContainer = lazy(() => import('../LectureContainer'));

const LayoutContainer = () => (
  <div className="LayoutContainer">
    <Header title="WydziałoweGwizadki" />
    <Router>
      <Suspense fallback={''}>
        <Switch>
          <Route exact path="/" render={() => <TailContainer />} />
          <Route path="/lecture/:id" render={({ match }) => <LectureContainer match={match} />} />
        </Switch>
      </Suspense>
    </Router>
    <Footer />
  </div>
);

export default LayoutContainer;
