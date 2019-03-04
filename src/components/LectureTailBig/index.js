import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StarRatingComponent from 'react-star-rating-component';

import './index.scss';

import Person from '../Person';

class LectureTailBig extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 3
    };
  }

  onStarClick(nextValue) {}

  onStarHoverOut() {}

  onStarHoverIn() {}

  render() {
    const { rating } = this.state;

    return (
      <div className="lecture-tail-big">
        <div>
          Średnia Ocena: <b> 3.5</b>
        </div>
        <div>
          <StarRatingComponent
            name="rating"
            value={rating}
            starCount={6}
            onStarClick={this.onStarClick.bind(this)}
            onStarHoverIn={this.onStarHoverIn.bind(this)}
          />
          <div>
            Komentarzy(<b>13</b>)
          </div>
          <div>
            Ranking: <b>1</b>
          </div>
        </div>
      </div>
    );
  }
}

export default LectureTailBig;
