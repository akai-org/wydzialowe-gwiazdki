import React, { Component } from 'react';
import './LectureComponent.scss';
import StarsComponent from './StarsComponent';

import Person from "./Person";

const LectureComponent = ({name, surname, profession}) => {
    return(
        <div className="LectureComponent">  
            <div>
            <Person name={name} surname={surname} profession={profession} />
            </div>
            <div id="Stars">
            <StarsComponent />
            <StarsComponent />
            <StarsComponent />
            <StarsComponent />
            <StarsComponent />

            </div>

        </div>
    )
};

export default LectureComponent;