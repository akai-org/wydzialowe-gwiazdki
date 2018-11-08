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
  colourStyles = {
    control: styles => ({ ...styles, backgroundColor: '#e9e9e9' }),
    option: (styles, {isDisabled, isFocused }) => {
      return {
        ...styles,
        backgroundColor: isDisabled
          ? null
          :isFocused ? '#dbdbdb' : '#e9e9e9',
           color: 'black',  
      };
    },
    control: styles => ({
      ...styles,
      border: 'none',
     ':active' : {
        border:'none'
     },
     ':hover' : {
      border:'none'
     },
     boxShadow: 'none'
    }),
    menuList: styles => ({ 
      ...styles,
    backgroundColor:'#e9e9e9',
    paddingTop:0,
    paddingBottom:0,
    }),
  };
  render() {
    return(
      <div className="container">
        <div className="formStyle">
          <form  className="styled-select">
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
          <div className="TailContainer">     
            { this.convertTails() }
          </div>
        </div>
      </div>
    )
  }
}

export default TailContainer;