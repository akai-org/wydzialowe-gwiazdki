import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StarRatingComponent from 'react-star-rating-component';

import './index.scss';

class LectureSubject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0
    };
  }

  onStarClick(nextValue) {
    this.setState({ rating: nextValue });
  }

  onStarHoverOut() {
    this.setState({ rating: 0 });
  }

  render() {
    const { subject } = this.props;
    const { rating } = this.state;

    return (
      <div className="LectureComponent">
        {subject}
        <div className="stars">
          <StarRatingComponent
            name="Lecture rating"
            value={rating}
            starCount={6}
            onStarClick={this.onStarClick.bind(this)}
          />
        </div>
      </div>
    );
  }
}

LectureSubject.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  profession: PropTypes.string
};

export default LectureSubject;
