import React from 'react';

import "./index.scss";
import LectureContainer from '../../containers/LectureContainer';

class LecturePage extends React.Component {
  render() {
    return (
      <div className="App-header">
        <LectureContainer profId={this.props.match.params.id}/>   
      </div>
    )
  }
}

export default LecturePage;