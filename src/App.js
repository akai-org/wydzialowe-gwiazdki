import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TailContainer from './TailContainer.js';

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
