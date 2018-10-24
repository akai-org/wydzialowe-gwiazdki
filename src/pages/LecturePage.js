import React from 'react';
import "./MainPage.scss";

import Header from "./../components/Header";
import Footer from "./../components/Footer";
import LectureContainer from './../containers/LectureContainer';


class LecturePage extends React.Component {
  render() {
    return (
      <div className="MainPage-Header">
            <Header title="Wydziałowe gwiazdki" />
            <LectureContainer />

            <Footer title="Aplikacja stworzona przez uczestników Koła AKAI" />     
      </div>

    )
  }
}

export default LecturePage;