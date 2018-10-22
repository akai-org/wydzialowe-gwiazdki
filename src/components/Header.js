import React from 'react';
import Logo from './logo2.png';

<<<<<<< HEAD
const Header = ({title}) => {
  return(
    <div className="header">
      <img src={Logo} alt="logo" className="logo"/>
      <h1>{title}</h1>  
=======
const Header = (props) => {
  return(
    <div>
      <h1 class="header">{props.title}</h1>
>>>>>>> develop
    </div>
  )
};

export default Header ;