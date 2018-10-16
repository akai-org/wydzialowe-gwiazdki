import React, { Component } from 'react';
import './LectureComponent.css';
import StarsComponent from './StarsComponent.js'

const LectureComponent = () => {
    return(
        <div className="LectureComponent">
        
            <div id="Stars">
                <StarsComponent />
                <StarsComponent />
                <StarsComponent />
                <StarsComponent />
                <StarsComponent />
                <StarsComponent />
            </div>  
        </div>
    )
}

export default LectureComponent;