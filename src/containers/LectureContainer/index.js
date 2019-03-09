import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.scss';

import lectures from '../../resources/lectures';
import LectureSection from '../../components/LectureSection';
import { DataService } from '../../services/DataService';

class LectureContainer extends Component {
  constructor() {
    super();

    this.state = {
      lectures: []
    };
    this.setState({ lectures: this.state.lectures });
    new DataService().get(
      'lectures',
      ev => {
        this.setState({ lectures: ev });
      },
      ev => {
        console.log(`Błąd zapytania${  ev}`);
      }
    );
  }

  getLectures = lectureType =>
    this.state.lectures.filter(lecture =>
      lecture.lessons[lectureType].includes(this.props.match.params.id)
    );

  render() {
    return (
      <div className="MainPage-Header">
        <div className="LectureContainer">
          <LectureSection title="Wykładowcy" lectures={this.getLectures('lectures')} />
          <LectureSection title="Ćwiczeniowcy" lectures={this.getLectures('exercises')} />
          <LectureSection title="Laboranci" lectures={this.getLectures('laboratories')} />
        </div>
      </div>
    );
  }
}

LectureContainer.propTypes = {
  match: PropTypes.object
};

export default LectureContainer;
