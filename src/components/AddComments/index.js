import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StarRatingComponent from 'react-star-rating-component';

import './index.scss';

class AddComments extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="AddComments">
        <p className="AddComment">Dodaj Komentarz:</p>
        <div className="CommentBox">
          <textarea type="text" placeholder="Dodaj Komentarz" id="name" name="login" />
        </div>
        <br />
        <input className="CommentsButton " type="button" name="submit" value="Dodaj" />
      </div>
    );
  }
}

export default AddComments;
