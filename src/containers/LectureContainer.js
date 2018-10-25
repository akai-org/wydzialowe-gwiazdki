import React, { Component } from 'react';
import './LectureContainer.scss';

import LectureComponent from "./../components/LectureComponent";

import lectures from './../resources/lectures';
import cda from './../pages/LecturePage';

class LectureContainer extends Component {
  convertLectures = () => {
    const list = lectures.filter(lectures => lectures.lessons.lectures.includes(this.props.lectureId));
    return list.map(filtrLectures => <LectureComponent name={filtrLectures.firstName} surname={filtrLectures.lastName} profession={filtrLectures.profession} />);
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