import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.scss';

const LectureTail = ({ photo, name, email }) => (
  <div className="lecture-tail">
    <p className="avatar">
      <img alt="avatar" src={photo} />
    </p>
    <p className="name">{name}</p>
    <p className="email">{email}</p>
  </div>
);

export default LectureTail;
