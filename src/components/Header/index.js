import React from 'react';
import Logo from './logo2.png';

import './index.scss';

const Header = () => {
  return(
    <div className="Header">
      <img src={Logo} alt="logo" className="logo"/>
      <h1>Wydziałowe </h1>
      <h1 className="HeaderText">gwiazdki</h1>  
    </div>
  )
}; 

export default Header ;