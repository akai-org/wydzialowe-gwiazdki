import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';
import LectureContainer from '../../containers/LectureContainer';

class LecturePage extends React.Component {
  render() {
    return (
      <div className="App-header">
        <LectureContainer profId={this.props.match.params.id} />
      </div>
    );
  }
}

LecturePage.propTypes = {
  match: PropTypes.object
};

export default LecturePage;
