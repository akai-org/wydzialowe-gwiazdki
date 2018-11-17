import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';
import LectureComponent from '../LectureComponent';

const convertLectures = lectures =>
  lectures.map((lecture, index) => (
    <LectureComponent
      key={index}
      name={lecture.firstName}
      surname={lecture.lastName}
      profession={lecture.profession}
    />
  ));

const LectureSection = ({ title, lectures }) => (
  <div className="lecture-section">
    <h3 className="lecture-section__title">{title}</h3>
    {lectures && lectures.length > 0 ? (
      convertLectures(lectures)
    ) : (
      <p className="lecture-section__empty">Brak prowadzących</p>
    )}
  </div>
);

LectureSection.propTypes = {
  title: PropTypes.string,
  lectures: PropTypes.array
};

export default LectureSection;
