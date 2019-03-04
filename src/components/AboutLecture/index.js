import React from 'react';

import './index.scss';

const AboutLecture = ({ name, content }) => (
  <div className="about-us">
    <h1 className="about-us-title">{name}</h1>
    <p>{content}</p>
  </div>
);

export default AboutLecture;
