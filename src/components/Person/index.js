import React from 'react';

import './index.scss';

const Person = ({ name, surname, profession }) => {
  return (
    <div className="lecture">
      <p className="lecture__profession">{profession}</p>
      <p className="lecture__name">{`${name} ${surname}`}</p>
    </div>
  )
}

export default Person;