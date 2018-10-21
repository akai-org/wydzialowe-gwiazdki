import React from 'react';
import "./../App.scss"

import Header from "./../components/Header";
import Footer from "./../components/Footer";
import LectureContainer from './../containers/LectureContainer';


class LecturePage extends React.Component {
  render() {
    return (
      <div className="App-header">
            <Header title="Wydziałowe Gwiazdki" />
            <LectureContainer />

            <Footer title="Aplikacja stworzona przez uczestników Koła AKAI" />     
      </div>

    )
  }
}

export default LecturePage;