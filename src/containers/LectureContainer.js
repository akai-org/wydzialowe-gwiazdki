import React, { Component } from 'react';
import './LectureContainer.scss';
import lectures from './../resources/lectures';
import LectureSection from '../components/LectureSection';

class LectureContainer extends Component {
  getLectures = lectureType => 
    lectures.filter(lecture => lecture.lessons[lectureType].includes(this.props.match.params.id));

  render() {
    return (
      <div className="MainPage-Header">
        <div className="LectureContainer">
          <LectureSection
            title="Wykładowcy"
            lectures={this.getLectures('lectures')}
          />
          <LectureSection
            title="Ćwiczeniowcy"
            lectures={this.getLectures('exercises')}
          />
          <LectureSection
            title="Laboranci"
            lectures={this.getLectures('laboratories')}
          />
        </div>
      </div>
    )
  }
}

export default LectureContainer;