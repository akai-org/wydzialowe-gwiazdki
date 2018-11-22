import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './index.scss';

const Tail = ({ title, id }) => (
  <Link className="tail-link" to={`/lecture/${id}`}>
    <div className="tail">
      <div className="title">{title}</div>
    </div>
  </Link>
);

Tail.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string
};

export default Tail;
