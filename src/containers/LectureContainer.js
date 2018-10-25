import React, { Component } from 'react';
import './LectureContainer.scss';

import LectureComponent from "./../components/LectureComponent";

import lectures from './../resources/lectures';


// const filtrLectures = lectures.filter(lectures => lectures.lessons.lectures.includes("AM"));
// const convertLectures = () => filtrLectures.map(filtrLectures => <LectureComponent name={filtrLectures.firstName} surname={filtrLectures.lastName} profession={filtrLectures.profession} />);

class LectureContainer extends Component {
  constructor(props)
  {
    super(props);
    this.state = {};
  }
  componentDidUpdate(prevState)
  {
    console.log("Dziala");
    const filtrLectures = lectures.filter(lectures => lectures.lessons.lectures.includes("AM"));
    console.log(filtrLectures);
    this.setState({filtrLectures: filtrLectures}) 
  }
  convertLectures = () => {
    console.log(this.state);
    if(this.state.filtrLectures){
     return this.state.filtrLectures.map(filtrLectures => <LectureComponent name={filtrLectures.firstName} surname={filtrLectures.lastName} profession={filtrLectures.profession} />);
    }
  }
   render() {
    return (
      <div className="LectureContainer">
          {/* <LectureComponent name="Tomasz" surname="Zygier" profession="Mgr. Inż" />
          <LectureComponent name="Roman" surname="Pająk" profession="Technik" />
          <LectureComponent name="Romasz" surname="Tygier" profession="Doktor" />
          <LectureComponent name="Szomat" surname="Rygiez" profession="profesor" /> */}
          {this.convertLectures()}
      </div>
    )
   }
}

export default LectureContainer;