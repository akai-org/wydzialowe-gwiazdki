import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Tail from './Tail.js';
import LectureContainer from './LectureContainer.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

           <Tail title="Analiza Matematyczna" icon="icon-pi-outline"/>
           <Tail title="Algebra" icon="icon-pi-outline"/>
           <Tail title="Matematyka" icon="icon-pi-outline"/>


        </header>
      </div>
    );
  }
}







export default App;
