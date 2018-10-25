import React, { Component } from 'react';
import './Tail.scss';

const Tail = ({title}) => {
    return (
        <div className="Tail">
            <div id="title">{title}</div>
        </div>
    )
}

export default Tail;