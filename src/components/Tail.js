import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Tail.scss';

const Tail = ({title, icon, id}) => {
    return (
        <Link className="TailLink" to={"/lecture/"+id}><div class="Tail">
            <div class="icon">{icon}</div>
            <div id="title">{title}</div>
        </div></Link>
    )
}

export default Tail;