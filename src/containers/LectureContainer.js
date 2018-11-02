import React, { Component } from 'react';
import './LectureContainer.scss';

import LectureComponent from "./../components/LectureComponent";
import lectures from './../resources/lectures';
import LectureSection from '../components/LectureSection';

// const filtr = lectures.filter(lectures => lectures.lessons);
// const convertLectures = () => filtr.map(filtr =>  <LectureComponent name={filtr.firstName} surname={filtr.lastName} profession={filtr.profession} />);

class LectureContainer extends Component {
  // convertProf = (a) => {
  //   switch(a)
  //   {
  //     case 'Lectures':
  //       const listLectures = lectures.filter(lectures => lectures.lessons.lectures.includes(this.props.profId));
  //       return listLectures.map(lectures => <LectureComponent name={lectures.firstName} surname={lectures.lastName} profession={lectures.profession} />);
  //     break;
  //     case 'Exercises':
  //       const listExercises = lectures.filter(lectures => lectures.lessons.exercises.includes(this.props.profId));
  //       return listExercises.map(lectures => <LectureComponent name={lectures.firstName} surname={lectures.lastName} profession={lectures.profession} />);
  //     break;
  //     case 'Laboratories':
  //       const listLaboratories = lectures.filter(lectures => lectures.lessons.laboratories.includes(this.props.profId));
  //       return listLaboratories.map(lectures => <LectureComponent name={lectures.firstName} surname={lectures.lastName} profession={lectures.profession} />);
  //     break;
  //   }
    
  // }

  getLectures = lectureType => lectures.filter(lecture => lecture.lessons[lectureType].includes(this.props.profId));

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

          {/* <h3>Wykładowcy</h3>
          {this.convertProf('Lectures')}
          <h3>Ćwiczeniowcy</h3>
          {this.convertProf('Exercises')}
          <h3>Laboranci</h3>
          {this.convertProf('Laboratories')} */}
        </div>
      </div>
    )
   }
}

export default LectureContainer;