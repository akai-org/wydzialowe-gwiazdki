import React  from 'react';
import Logo from './logo2.png';

import './Footer.scss';

const Footer = () => {
    return(
      <div className="footerClass">
        <img src={Logo} alt="logo" className="logoFooter"/>
        <p >Created by AKAI</p>
      </div>
    )
  
  }
  export default Footer
