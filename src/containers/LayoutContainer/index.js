import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.scss';

import Loader from '../../components/Loader';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LectureContainer from '../LectureContainer';

const TailContainer = lazy(() => import('../TailContainer'));

const LayoutContainer = () => (
  <div className="LayoutContainer">
    <Header title="WydziałoweGwizadki" />
    <Router>
      <Switch>
        <Suspense fallback={<Loader />}>
          <Route exact path="/" render={() => <TailContainer />} />
          <Route path="/lecture/:id" component={LectureContainer} />
        </Suspense>
      </Switch>
    </Router>
    <Footer />
  </div>
);

export default LayoutContainer;
