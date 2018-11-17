import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StarRatingComponent from 'react-star-rating-component';

import './index.scss';

import Person from '../Person';

class LectureComponent extends Component {
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
    const { name, surname, profession } = this.props;
    const { rating } = this.state;

    return (
      <div className="LectureComponent">
        <div className="PersonClass">
          <Person name={name} surname={surname} profession={profession} />
        </div>
        <div className="Stars">
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

LectureComponent.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  profession: PropTypes.string
};

export default LectureComponent;
