import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header'; 

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header title='Wydziałowe Gwiazdki'></Header>
      <Footer></Footer>  
      </div>
    );
  }
}

export default App;
