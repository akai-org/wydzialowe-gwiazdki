import React, { Component } from 'react';
import './Tail.css';

const Tail = ({title, icon}) => {
    return (
        <div class="Tail">
            <div class="icon">{icon}</div>
            <div id="title">{title}</div>
        </div>
    )
}

export default Tail;