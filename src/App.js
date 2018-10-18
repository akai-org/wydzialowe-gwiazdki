import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LectureComponent from './components/LectureComponent';
import TailContainer from './containers/TailContainer';
import Footer from './components/Footer';
import Header from './components/Header'; 
import Person from './components/Person'; 

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header title='Wydziałowe Gwiazdki'></Header>
      <Person name="Pan" surname="XYZ" function="Doktor"></Person>
      <Footer></Footer>  
      </div>
    );
  }
}

export default App;
