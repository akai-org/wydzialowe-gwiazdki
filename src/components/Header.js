import React from 'react';
import Logo from './logo2.png';

import './Header.scss';

const Header = ({title}) => {
  return(
    <div className="Header">
      <img src={Logo} alt="logo" className="logo"/>
      <h1>{title}</h1>  
    </div>
  )
};

export default Header ;