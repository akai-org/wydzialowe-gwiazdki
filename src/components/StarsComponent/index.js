import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.scss';

const StarsComponent = () => (
  <div className="StarsComponent">
    <FontAwesomeIcon class="star-icon" icon="star" />
    <FontAwesomeIcon class="star-icon" icon={['far', 'star']} />
  </div>
);

export default StarsComponent;
