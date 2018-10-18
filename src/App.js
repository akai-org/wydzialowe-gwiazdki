import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LectureComponent from './components/LectureComponent';
import TailContainer from './containers/TailContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <TailContainer />
        </header>
      </div>
    );
  }
}


export default App;
