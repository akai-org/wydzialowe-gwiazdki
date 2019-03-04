import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StarRatingComponent from 'react-star-rating-component';

import './index.scss';

class Comments extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Comments">
        <p className="AddComment">
          <i>
            14-07-2022 by <b>{this.props.name}</b>
          </i>
        </p>
        <div className="CommentBox">{this.props.content}</div>
      </div>
    );
  }
}

export default Comments;
