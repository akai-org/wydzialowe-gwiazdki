import React, { Component } from 'react';

import { Link } from "react-router-dom";
import './Tail.scss';

const Tail = ({title, id}) => {
    return (
        <Link className="TailLink" to={"/layout/lecture/"+id}>
            <div className="Tail">
                <div id="title">{title}</div>
            </div>
        </Link>
    )
}

export default Tail;