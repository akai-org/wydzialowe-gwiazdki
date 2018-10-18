import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import LectureComponent from './components/LectureComponent';
import TailContainer from './containers/TailContainer';
import Footer from './components/Footer';
import Header from './components/Header'; 
import Person from './components/Person'; 

import MainPage from './pages/MainPage';
import LecturePage from './pages/LecturePage';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/lecture" component={LecturePage} />
        </Switch>
      </Router>
      
      // <div className="App">
      // <Header title='Wydziałowe Gwiazdki'></Header>
      // <Person name="Pan" surname="XYZ" function="Doktor"></Person>
      // <Footer></Footer>  
      // </div>
    );
  }
}

export default App;
