import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.scss';

import PrivateRoute from '../../PrivateRouter';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TailContainer from '../TailContainer';
import LectureContainer from '../LectureContainer';
import LoginContainer from '../LoginContainer';

function LayoutContainer(props) {
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
            authenticated={props.authen}
          />
          <PrivateRoute
            path="/lecture/:id"
            component={LectureContainer}
            authenticated={props.authen}
          />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

LayoutContainer.propTypes = {
  authen: PropTypes.bool.isRequired
};

export default LayoutContainer;
