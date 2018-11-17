import React from 'react';

import './index.scss';

const Footer = () => (
  <div className="FooterClass">
    <p className="FooterText">
      &copy; created by
      <a href="https://akai.org.pl/" className="FooterText">
        {' '}
        AKAI
      </a>
    </p>
  </div>
);

export default Footer;
