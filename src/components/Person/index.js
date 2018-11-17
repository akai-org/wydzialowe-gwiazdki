import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Person = ({ name, surname, profession }) => (
  <div className="lecture">
    <p className="lecture__profession">{profession}</p>
    <p className="lecture__name">{`${name} ${surname}`}</p>
  </div>
);

Person.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  profession: PropTypes.string
};

export default Person;
