import React, { Component } from 'react';
import Select from 'react-select';
import './index.scss';
import { DataService } from '../../services/DataService';
import Tail from '../../components/Tail';

class TailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      semesterSelectValue: 1,
      lessonss: []
    };
    new DataService().get(
      'lessons',
      ev => {
        this.setState({ lessonss: ev });
      },
      ev => {
        console.log(`Błąd zapytania${  ev}`);
      }
    );

    console.log(this.state.lessonss);
  }

  handleChange = option => this.setState({ semesterSelectValue: option.value });

  convertTails = () =>
    this.state.lessonss
      .filter(lesson => lesson.semester === Number(this.state.semesterSelectValue))
      .map((lesson, index) => <Tail key={index} title={lesson.name} id={lesson.code} />);

  selectOptions = [
    { value: 1, label: 'Semestr 1' },
    { value: 2, label: 'Semestr 2' },
    { value: 3, label: 'Semestr 3' },
    { value: 4, label: 'Semestr 4' },
    { value: 5, label: 'Semestr 5' },
    { value: 6, label: 'Semestr 6' },
    { value: 7, label: 'Semestr 7' }
  ];

  colourStyles = {
    option: (styles, { isDisabled, isFocused }) => ({
      ...styles,
      backgroundColor: isDisabled ? null : isFocused ? '#dbdbdb' : '#e9e9e9',
      color: 'black'
    }),
    control: styles => ({
      ...styles,
      backgroundColor: '#e9e9e9',
      border: 'none',
      ':active': {
        border: 'none'
      },
      ':hover': {
        border: 'none'
      },
      boxShadow: 'none'
    }),
    menuList: styles => ({
      ...styles,
      backgroundColor: '#e9e9e9',
      paddingTop: 0,
      paddingBottom: 0
    })
  };

  render() {
    return (
      <div className="container">
        <div className="form-style">
          <form className="styled-select form">
            <Select
              options={this.selectOptions}
              name="semester"
              defaultValue={this.selectOptions[0]}
              onChange={this.handleChange}
              styles={this.colourStyles}
            />
          </form>
        </div>
        <div>
          <div className="tail-container">{this.convertTails()}</div>
        </div>
      </div>
    );
  }
}

export default TailContainer;
