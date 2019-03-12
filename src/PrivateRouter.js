import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { db, firebase } from './firebase';

export default function PrivateRoute({ component: Component, admin, ...rest }) {
  const { initialising, user } = useAuthState(firebase.auth());

  const priv = val => (
    <Route
      {...rest}
      render={props => (val ? <Component {...props} {...rest} /> : <Redirect to="/" />)}
    />
  );

  // useEffect(() => {
  //   isMounted = true;
  //   if (isMounted) {
  //     firebase.auth().onAuthStateChanged(function (user) {
  //       db.ref("/users/" + user.uid).once('value').then((b) => {
  //         let isAdmin = b.val().admin
  //         setUserStat(isAdmin)
  //       })
  //     })
  //   }
  //   return () => {
  //     isMounted = false;
  //   }
  // }, [])
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
