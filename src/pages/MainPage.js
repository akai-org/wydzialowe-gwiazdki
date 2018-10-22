import React from 'react';

import "./MainPage.scss";

import Header from './../components/Header';
import TailContainer from './../containers/TailContainer';
import Footer from './../components/Footer';
import lessons from './../resources/lessons';

const convertLessons = () => lessons.map(lesson => <div>{lesson.name}</div>);

class MainPage extends React.Component {
  render() {
    return (
        <div className="MainPage-Header">
          <Header title="Wydziałowe gwiazdki"/>
          <TailContainer/>
          <Footer/>
        </div>
    )
  }
}

export default MainPage;