import React from 'react';
import { Link } from "react-router-dom";

import './index.scss';

const Tail = ({title, id}) => {
  return (
    <Link className="TailLink" to={"/lecture/"+id}>
      <div className="Tail">
        <div id="title">{title}</div>
      </div>
    </Link>
  )
}

export default Tail;