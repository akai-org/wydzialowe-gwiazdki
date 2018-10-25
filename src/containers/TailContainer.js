import React, { Component } from 'react';
import './TailContainer.scss';
import Tail from './../components/Tail';
import lessons from './../resources/lessons';
import { SubjectSubscriber } from 'rxjs/internal/Subject';

const convertTails = () => lessons.map(lesson =>{return (<Tail title={lesson.name}/>)});

class TailContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Semestr 1'};
    
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
    render() {
        return(
            <div>
                <form  className="styled-select">
                    <label>
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="Semestr 1">Semestr 1</option>
                            <option value="Semestr 2">Semestr 2</option>
                            <option value="Semestr 3">Semestr 3</option>
                            <option value="Semestr 4">Semestr 4</option>
                            <option value="Semestr 5">Semestr 5</option>
                            <option value="Semestr 6">Semestr 6</option>
                            <option value="Semestr 7">Semestr 7</option>
                        </select>
                    </label>
                </form>
                <div className="TailContainer">     
                    {convertTails()}
                </div>
            </div>
    )}
}

export default TailContainer;