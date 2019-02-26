import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { firebase } from './firebase';

export default function PrivateRoute({ component: Component, ...rest }) {
  const priv = val => (
    <Route
      {...rest}
      render={props => (val ? <Component {...props} {...rest} /> : <Redirect to="/" />)}
    />
  );
  const { initialising, user } = useAuthState(firebase.auth());
  if (initialising) {
    return (
      <div>
        <p>Initialising User...</p>
      </div>
    );
  }
  if (user) {
    return priv(true);
  }
  return priv(false);
}
