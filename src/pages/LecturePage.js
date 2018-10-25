import React from 'react';
import "./../App.scss"

import Header from "./../components/Header";
import Footer from "./../components/Footer";
import LectureContainer from './../containers/LectureContainer';


class LecturePage extends React.Component {
  constructor (props)
  {
    super(props);
    this.state = {}
  }
  componentWillUpdate(nextState, nextProps)
  {
    this.setState({lectureId: this.props.match.params.id})
  }
  render() {
    return (
      <div className="App-header">
            <Header title="Wydziałowe Gwiazdki" />
            <LectureContainer idLecture={this.state.lectureId}/>
            <Footer title="Aplikacja stworzona przez uczestników Koła AKAI" />     
      </div>

    )
  }
}
export default LecturePage;