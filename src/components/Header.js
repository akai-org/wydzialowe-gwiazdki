import React from 'react';
import './Header.scss';

const Header = (props) => {
  return(
    <div>
      <h1 className="Header">{props.title}</h1>
    </div>
  )
};

export default Header ;