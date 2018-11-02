import React, { Component } from 'react';
import './LectureContainer.scss';
import lectures from './../resources/lectures';

import LectureSection from "./../components/LectureSection";



class LectureContainer extends Component {

  getLectures(subject)
  {
  switch(subject)
  {
    case "lectures":
    return lectures.filter(lectures => lectures.lessons.lectures.includes(this.props.profId));


    case "Exercises":
    return lectures.filter(lectures => lectures.lessons.exercises.includes(this.props.profId));


    case "Laboratories":
    return lectures.filter(lectures => lectures.lessons.laboratories.includes(this.props.profId));

  }

  }


   render() {


    return (
      <div className="MainPage-Header">
      <div className="LectureContainer">

       
          <section>
          <h3>Wykładowcy</h3>
          <LectureSection subject={this.getLectures("lectures")} />
          </section>

          <section>
          <h3>Ćwiczeniowcy</h3>
          <LectureSection subject={this.getLectures("Exercises")} />
          </section>


        <section>
        <h3>Laboranci</h3>
        <LectureSection subject={this.getLectures("Laboratories")} />
        </section>

      </div>
</div>
    )
   }
}

export default LectureContainer;