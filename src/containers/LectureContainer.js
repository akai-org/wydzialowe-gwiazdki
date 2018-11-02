import React, { Component } from 'react';
import './LectureContainer.scss';
 ///wwww
import LectureComponent from "./../components/LectureComponent";
import lectures from './../resources/lectures';

const filtr = lectures.filter(lectures => lectures.lessons);
const convertLectures = () => filtr.map(filtr =>  <LectureComponent name={filtr.firstName} surname={filtr.lastName} profession={filtr.profession} />);



class LectureContainer extends Component {
  convertProf = (a) => {
    switch(a)
    {
      case 'Lectures':
        const listLectures = lectures.filter(lectures => lectures.lessons.lectures.includes(this.props.profId));
        var lectureReturn = listLectures.map(lectures => <LectureComponent name={lectures.firstName} surname={lectures.lastName} profession={lectures.profession} />);
        
        if(lectureReturn.length === 0)
        {
            return <i className="noRecord">Brak Prowadzących</i>;
        } else {
          return lectureReturn;
        }

      break;
      case 'Exercises':
        const listExercises = lectures.filter(lectures => lectures.lessons.exercises.includes(this.props.profId));
        var exerciseReturn = listExercises.map(lectures => <LectureComponent name={lectures.firstName} surname={lectures.lastName} profession={lectures.profession} />);
      
        if(exerciseReturn.length === 0)
        {
            return <i className="noRecord">Brak Prowadzących</i>;
        } else {
          return exerciseReturn;
        }

      break;
      case 'Laboratories':
        const listLaboratories = lectures.filter(lectures => lectures.lessons.laboratories.includes(this.props.profId));
        var laboratorieReturn = listLaboratories.map(lectures => <LectureComponent name={lectures.firstName} surname={lectures.lastName} profession={lectures.profession} />);
      
        if(laboratorieReturn.length === 0)
        {
            return <i className="noRecord">Brak Prowadzących</i>;
        } else {
          return laboratorieReturn;
        }

      break;
    }
    
  }

   render() {
    return (
      <div className="MainPage-Header">
      <div className="LectureContainer">
          
          <section>
          <h3>Wykładowcy</h3>
          {this.convertProf('Lectures')}
          </section>

          <section>
          <h3>Ćwiczeniowcy</h3>
          {this.convertProf('Exercises')}
          </section>


        <section>
        <h3>Laboranci</h3>
        {this.convertProf('Laboratories')}
        </section>

      </div>
</div>
    )
   }
}

export default LectureContainer;