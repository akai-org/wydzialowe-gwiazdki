import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Wydzialowe gwiazdki</h1>
          <ComponentOne />
        </header>
      </div>
    );
  }
}

const ComponentOne = () => {
  return (
    <p>component 1</p>
  )
}

export default App;
