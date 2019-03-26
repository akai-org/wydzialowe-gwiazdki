import React, { useState, useEffect } from 'react';
import { setTimeout } from 'timers';
import "../LayoutContainer/index.scss";
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function NoMatch(props) {
  const [state, setState] = useState('');
  setTimeout(() => {
    props.history.push('/mainpage');
  }, 3000);
  return (
    <div className="LayoutContainer noMatch">
      <Header />
      <h1>{state}</h1>
      <Footer />
    </div>
  );
}

export default NoMatch;
