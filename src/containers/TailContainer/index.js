import React, { Component } from 'react';

import './index.scss';

import Select from '../../components/Select';
import Tail from '../../components/Tail';
import { getLessons } from '../../services/lessonSevice';

class TailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lessons: [],
      semesterSelectValue: 1
    };
  }

  async componentDidMount() {
    const lessons = await getLessons();
    this.setState({ lessons });
  }

  handleChange = option => this.setState({ semesterSelectValue: option.value });

  convertTails = () =>
    this.state.lessons
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
