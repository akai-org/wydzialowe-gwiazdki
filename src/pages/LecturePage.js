import React from 'react';
import "./MainPage.scss";
import "./../App.scss";

import Header from "./../components/Header";
import Footer from "./../components/Footer";
import LectureContainer from './../containers/LectureContainer';


class LecturePage extends React.Component {
  render() {
    return (
      <div className="App-header">
            <Header title="Wydziałowe Gwiazdki" />
            <LectureContainer profId={this.props.match.params.id}/>
            <Footer />     
      </div>

    )
  }
}
export default LecturePage;