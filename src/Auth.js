import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import LayoutContainer from './containers/LayoutContainer';
import { firebase } from './firebase';

export default function authFunc() {
  const { initialising, user } = useAuthState(firebase.auth());
  if (initialising) {
    return (
      <div>
        <p>Initialising User...</p>
      </div>
    );
  }
  if (user) {
    return <LayoutContainer authen={true} />;
  }
  return <LayoutContainer authen={false} />;
}
