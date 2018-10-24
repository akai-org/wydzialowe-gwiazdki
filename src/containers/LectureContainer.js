import React, { Component } from 'react';
import './LectureContainer.scss';

import LectureComponent from "./../components/LectureComponent";
import lectures from './../resources/lectures';

const convertLectures = () => lectures.map(lectures =>  <LectureComponent name={lectures.firstName} surname={lectures.lastName} profession={lectures.profession} />);

class LectureContainer extends Component {
   render() {
    return (
      <div className="MainPage-Header">
      <div className="LectureContainer">
          {/* <LectureComponent name="Tomasz" surname="Zygier" profession="Mgr. Inż" />
          <LectureComponent name="Roman" surname="Pająk" profession="Technik" />
          <LectureComponent name="Romasz" surname="Tygier" profession="Doktor" />
          <LectureComponent name="Szomat" surname="Rygiez" profession="profesor" /> */}
          {convertLectures()}  
      </div> 
   
      </div>

    )
   }
}

export default LectureContainer;