import React, { useState, useEffect } from 'react';
import { setTimeout } from 'timers';
// import './index.scss';

function NoMatch() {
  const [state, setState] = useState('');
  setTimeout(() => {
    setState('404');
  }, 3000);
  return <div className="noMatch">{state}</div>;
}

export default NoMatch;
