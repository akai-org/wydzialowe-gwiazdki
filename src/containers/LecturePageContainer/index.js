import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LectureTail from '../../components/LectureTail';
import LectureTailBig from '../../components/LectureTailBig';
import AboutLecture from '../../components/AboutLecture';

import './index.scss';

import lectures from '../../resources/lectures';
import LectureSubject from '../../components/LectureSubject';
import AddComments from '../../components/AddComments';
import Comments from '../../components/Comments';

class LecturePageContainer extends Component {
  getLectures = lectureType =>
    lectures.filter(lecture => lecture.lessons[lectureType].includes('AM'));

  render() {
    return (
      <div className="MainPage-Header">
        <div className="team-container">
          <div>
            <LectureTail
              photo="http://wcs.et.put.poznan.pl/kr/f.php?f=645&u=3"
              name="prof. dr hab. inż. Jerzy Tyszer"
              email="Jerzy.tyszer@put.poznan.pl"
            />
            <LectureTailBig
              photo="http://www.gravatar.com/avatar/bd5cf25f282f6c7497f22969a2265ac6"
              name="Damian Karbowiak"
              email="damian.karbowiSak@akai.org.pl"
            />

            <p className="clear-both" />
          </div>
          <div>
            <AboutLecture
              name="prof. dr hab. inż. Jerzy Tyszer"
              content="Jerzy Tyszer jest pracownikiem Politechniki Poznańskiej od 1982 roku. W latach 1990 – 1996 był zatrudniony w Microelectronics and Computer Systems Laboratory uniwersytetu McGill w Montrealu, Kanada. W roku 1998 uzyskał tytuł naukowy profesora nauk technicznych. Zainteresowania naukowe prof. Tyszera obejmują szeroko rozumianą problematykę testowania scalonych układów cyfrowych wielkiej skali integracji oraz komputerowo wspomaganego projektowania testowalnych układów i systemów cyfrowych."
            />
          </div>
        </div>
        <div className="LectureContainer">
          <h3 className="lecture-section__title">Przedmioty</h3>
          <LectureSubject subject="Algorytmy i struktury danych" />
          <h3 className="lecture-section__title">Komentarze</h3>
          <AddComments />
          <Comments name="Biniox" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore " />
          <Comments name="Biniox" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore " />
          <Comments name="Biniox" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore " />
        </div>
      </div>
    );
  }
}

LecturePageContainer.propTypes = {
  match: PropTypes.object
};

export default LecturePageContainer;
