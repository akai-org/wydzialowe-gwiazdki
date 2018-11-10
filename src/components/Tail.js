import React, { Component } from 'react';

import { Link } from "react-router-dom";
import './Tail.scss';

const Tail = ({title, icon, id}) => {
    return (
        <Link className="TailLink" to={"/layout/lecture/"+id}>
            <div className="Tail">
                <div className="icon">{icon}</div>
                <div id="title">{title}</div>
            </div>
        </Link>
    )
}

export default Tail;