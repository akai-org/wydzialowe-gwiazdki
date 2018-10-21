import React, { Component } from 'react';
import './LectureContainer.scss';

import LectureComponent from "./../components/LectureComponent";

class LectureContainer extends Component {
   render() {
    return (
      <div class="LectureContainer">
          <LectureComponent name="Tomasz" surname="Zygier" profession="Mgr. Inż" />
          <LectureComponent name="Roman" surname="Pająk" profession="Technik" />
          <LectureComponent name="Romasz" surname="Tygier" profession="Doktor" />
          <LectureComponent name="Szomat" surname="Rygiez" profession="profesor" />
      </div>
    )
   }
}

export default LectureContainer;