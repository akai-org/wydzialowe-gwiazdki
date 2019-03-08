import React, { Component } from 'react';
import Select from 'react-select';
import './index.scss';
import Tail from '../../components/Tail';
import lessons from '../../resources/lessons';

console.log(lessons);
class users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      semesterSelectValue: 0,
      departmentsSelectValue: 0,
      courseSubject: 0
    };
  }

  handleChange = option => this.setState({ semesterSelectValue: option.value });

  convertTails = () => {
    let results;
    if (this.state.semesterSelectValue !== 0) {
      results = lessons
        .filter(lesson => lesson.semester === Number(this.state.semesterSelectValue))
        .map((lesson, index) => <Tail key={index} title={lesson.name} id={lesson.code} />);
    } else {
      results = lessons.map((lesson, index) => (
        <Tail key={index} title={lesson.name} id={lesson.code} />
      ));
    }

    return results;
  };
  selectOptions = [
    { value: 0, label: 'Wszystkie semestry' },
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
            <table>
              <tr>
                <td>
                  <Select
                    options={this.selectOptions}
                    name="semester"
                    defaultValue={this.selectOptions[0]}
                    onChange={this.handleChange}
                    styles={this.colourStyles}
                  />
                </td>
                <td>
                  <Select
                    options={this.selectOptions}
                    name="semester"
                    defaultValue={this.selectOptions[0]}
                    onChange={this.handleChange}
                    styles={this.colourStyles}
                  />
                </td>
                <td>
                  <Select
                    options={this.selectOptions}
                    name="semester"
                    defaultValue={this.selectOptions[0]}
                    onChange={this.handleChange}
                    styles={this.colourStyles}
                  />
                </td>
              </tr>
            </table>
          </form>
        </div>
        <div>
          <table>
            <tr>
              <th>Uid</th>
              <th>Email</th>
              <th>Wydział</th>
              <th>Zarejestrowany</th>
              <th>Zalogowany</th>
            </tr>

            <tr>
              <td>36gUHH3za4QpK7QJbOyHgy0F0WT2</td>
              <td>test@gmail.com</td>
              <td>Elektronika i telekomunikacja</td>
              <td>26 lut 2019</td>
              <td>26 lut 2019</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default users;
