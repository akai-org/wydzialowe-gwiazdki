import React, { Component } from 'react';
import './LectureComponent.scss';
import StarsComponent from './StarsComponent';
import StarRatingComponent from "react-star-rating-component";

import Person from "./Person";

class LectureComponent extends React.Component {

  constructor({name, surname, profession}) {
    super({name, surname, profession});
    this.name = {name};
    this.surname = {surname};
    this.profession = {profession};
      
        this.state = {
      rating: 0
    };
  } 

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }
    
  onStarHoverOut(nextValue, prevValue, name) {
    this.setState({rating: 0});
  }
    
    render() {
const { name } = this.name;
const { surname } = this.surname;
const { profession } = this.profession;
const { rating } = this.state;
    return(
        <div className="LectureComponent">  
            <div className="PersonClass">
            <Person name={name} surname={surname} profession={profession} />
            </div>
            <div className="Stars">
        
                <StarRatingComponent
                    name="Lecture rating" 
                    value={rating} 
                    starCount={6} 
                    onStarClick={this.onStarClick.bind(this)}

                    
                />

            </div>

        </div>
    );
    }
};

export default LectureComponent;