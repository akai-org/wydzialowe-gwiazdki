import React, { Component } from 'react';
import './Tail.css';
import './fontello/css/fontello.css';
// Component uses Fontello  
const Tail = ({title, icon}) => {
    return (
    <div class="Tail">
        <div class="icon"><span class={icon}></span> </div>
        <div id="title">{title}</div>
    </div>
    )
    
}

export default Tail;