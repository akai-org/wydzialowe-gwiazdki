import React from 'react';

import LectureComponent from './../components/LectureComponent';

function LectureSection({subject})  {
    var lectureReturn;

    var returnList = subject.map(lectures => <LectureComponent name={lectures.firstName} surname={lectures.lastName} profession={lectures.profession} />);
      
    if(returnList.length === 0)
    {
        lectureReturn = <i className="noRecord">Brak Prowadzących</i>;
    } else {
        lectureReturn = returnList;
    }
    return lectureReturn;
  }

  export default LectureSection ;