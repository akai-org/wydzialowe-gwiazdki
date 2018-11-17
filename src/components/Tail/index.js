import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './index.scss';

const Tail = ({ title, id }) => (
  <Link className="TailLink" to={`/lecture/${id}`}>
    <div className="Tail">
      <div id="title">{title}</div>
    </div>
  </Link>
);

Tail.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string
};

export default Tail;
