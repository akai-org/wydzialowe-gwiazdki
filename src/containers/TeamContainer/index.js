import React, { Component } from 'react';
// import { firebase } from '../../firebase';
import TeamTail from '../../components/TeamTail';
import AboutUs from '../../components/AboutUs';
import './index.scss';

class TeamContainer extends Component {
  render() {
    return (
      <div className="team-container">
        <div>
          <AboutUs />
        </div>
        <div>
          <TeamTail
            photo="https://akai.org.pl/wp-content/themes/akai-new/images/avatar.png"
            name="Jarosław Bińczyk"
            email="Jaroslaw.binczyk@akai.org.pl"
            github="null"
            linkedin="null"
          />
          <TeamTail
            photo="https://akai.org.pl/wp-content/themes/akai-new/images/avatar.png"
            name="Damian Karbowiak"
            email="damian.karbowiak@akai.org.pl"
            github="null"
            linkedin="null"
          />
          <TeamTail
            photo="https://akai.org.pl/wp-content/themes/akai-new/images/avatar.png"
            name="Magda Skurczyńska"
            email="Magda.Skurczynska@akai.org.pl"
            github="null"
            linkedin="null"
          />
          <TeamTail
            photo="https://akai.org.pl/wp-content/themes/akai-new/images/avatar.png"
            name="Mateusz Stempniewicz"
            email="mateusz.stempniewicz@akai.org.pl"
            github="null"
            linkedin="null"
          />

          <p className="clear-both" />
        </div>
      </div>
    );
  }
}

export default TeamContainer;
