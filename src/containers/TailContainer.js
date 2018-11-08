import React, { Component } from 'react';
import Select from 'react-select';
import './TailContainer.scss';
import Tail from './../components/Tail';
import lessons from './../resources/lessons';

class TailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      semesterSelectValue: 1
    };
  }
    
  handleChange = option => this.setState({semesterSelectValue: option.value});
  convertTails = () => lessons.filter(lesson => lesson.semester == this.state.semesterSelectValue)
    .map(lesson => <Tail title={lesson.name} id={lesson.code} /> );

  selectOptions = [
    { value: 1, label: 'Semestr 1' },
    { value: 2, label: 'Semestr 2' },
    { value: 3, label: 'Semestr 3' },
    { value: 4, label: 'Semestr 4' },
    { value: 5, label: 'Semestr 5' },
    { value: 6, label: 'Semestr 6' },
    { value: 7, label: 'Semestr 7' }
  ];
    
  render() {
    return(
      <div>
        <form  className="styled-select">
          <Select
            options={this.selectOptions}
            name="semester"
            defaultValue={this.selectOptions[0]}
            onChange={this.handleChange}
          />
        </form>
        <div className="TailContainer">     
          { this.convertTails() }
        </div>
      </div>
    )
  }
}

export default TailContainer;