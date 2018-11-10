import React, { Component } from 'react';
import './LectureContainer.scss';
 ///wwww
import LectureComponent from "./../components/LectureComponent";
import lectures from './../resources/lectures';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const filtr = lectures.filter(lectures => lectures.lessons);
const convertLectures = () => filtr.map(filtr =>  <LectureComponent name={filtr.firstName} surname={filtr.lastName} profession={filtr.profession} />);



class LectureContainer extends Component {
  convertProf = (a,b) => {
    switch(a)
    {
      case 'Lectures':
        const listLectures = lectures.filter(lectures => lectures.lessons.lectures.includes(b));
        return listLectures.map(lectures => <LectureComponent name={lectures.firstName} surname={lectures.lastName} profession={lectures.profession} />);
      break;
      case 'Exercises':
        const listExercises = lectures.filter(lectures => lectures.lessons.exercises.includes(b));
        return listExercises.map(lectures => <LectureComponent name={lectures.firstName} surname={lectures.lastName} profession={lectures.profession} />);
      break;
      case 'Laboratories':
        const listLaboratories = lectures.filter(lectures => lectures.lessons.laboratories.includes(b));
        return listLaboratories.map(lectures => <LectureComponent name={lectures.firstName} surname={lectures.lastName} profession={lectures.profession} />);
      break;
    }
  }
  idParam = this.props.match.params.id;
   render() {
    return (
      <div className="LectureContainer">
          <h3>Wykładowcy</h3>
          {this.convertProf('Lectures', this.idParam)}
          <h3>Ćwiczeniowcy</h3>
          {this.convertProf('Exercises', this.idParam)}
          <h3>Laboranci</h3>
          {this.convertProf('Laboratories', this.idParam)}
      </div>
    )
   }
}

export default LectureContainer;