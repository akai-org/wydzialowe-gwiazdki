import React  from 'react';
import Logo from './logo2.png';

const Footer = () => {
    return(
      <div className="footerClass">
        <img src={Logo} alt="logo" className="logoFooter"/>
        <p >Projekt stworzony przez uczestników Koła Akai</p>
      </div>
    )
  
  }
  export default Footer