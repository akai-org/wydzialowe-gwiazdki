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
          <TeamTail
            photo="https://pl.gravatar.com/userimage/152873343/dc6dd67fa1810ebd88ee43dd33c307fd.png"
            name="Jarosław Bińczyk"
            email="Jaroslaw.binczyk@akai.org.pl"
            github="null"
            linkedin="null"
          />
          <TeamTail
            photo="http://www.gravatar.com/avatar/bd5cf25f282f6c7497f22969a2265ac6"
            name="Damian Karbowiak"
            email="damian.karbowiak@akai.org.pl"
            github="null"
            linkedin="null"
          />
          <TeamTail
            photo="http://www.gravatar.com/avatar/7e674306df99fe340cee1e7a3748cb6c"
            name="Magda Skurczyńska"
            email="Magda.Skurczynska@akai.org.pl"
            github="null"
            linkedin="null"
          />
          <TeamTail
            photo="http://www.gravatar.com/avatar/2e8a4a27f347ad7b9db1a49d157954bf"
            name="Mateusz Stempniewicz"
            email="mateusz.stempniewicz@akai.org.pl"
            github="null"
            linkedin="null"
          />

          <p className="clear-both" />
        </div>
        <div>
          <AboutUs />
        </div>
      </div>
    );
  }
}

export default TeamContainer;
