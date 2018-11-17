import React from 'react';

import "./index.scss";

import TailContainer from '../../containers/TailContainer';

class MainPage extends React.Component {
  render() {
    return (
        <div className="MainPage-Header">
          <TailContainer/>
        </div>
    )
  }
}

export default MainPage;