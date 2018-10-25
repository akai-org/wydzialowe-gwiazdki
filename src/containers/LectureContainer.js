import React, { Component } from 'react';
import './LectureContainer.scss';

import LectureComponent from "./../components/LectureComponent";
import lectures from './../resources/lectures';

const filtr = lectures.filter(lectures => lectures.lessons);
const convertLectures = () => filtr.map(filtr =>  <LectureComponent name={filtr.firstName} surname={filtr.lastName} profession={filtr.profession} />);

class LectureContainer extends Component {
   render() {
    return (
      <div className="MainPage-Header">
      <div className="LectureContainer">
      <h3>Wykładowcy</h3>
          {convertLectures()}  
          <h3>Ćwiczeniowcy</h3>
          {convertLectures()}  

  <h3>Laboranci</h3>
          {convertLectures()}  
      </div> 
   
      </div>

    )
   }
}

export default LectureContainer;