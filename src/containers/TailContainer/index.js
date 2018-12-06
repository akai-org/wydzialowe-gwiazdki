import React, { useState } from 'react';

import './index.scss';

import Select from '../../components/Select';
import Tail from '../../components/Tail';
import Loader from '../../components/Loader';
import { useFirebaseSnapshot } from '../../hooks/useFirebaseSnapshot';

const selectOptions = [
  { value: 1, label: 'Semestr 1' },
  { value: 2, label: 'Semestr 2' },
  { value: 3, label: 'Semestr 3' },
  { value: 4, label: 'Semestr 4' },
  { value: 5, label: 'Semestr 5' },
  { value: 6, label: 'Semestr 6' },
  { value: 7, label: 'Semestr 7' }
];

const TailContainer = () => {
  const [semesterSelectValue, setSemesterSelectValue] = useState(1);
  const [lessons] = useFirebaseSnapshot('lessons');

  const handleChange = option => setSemesterSelectValue(option.value);

  const convertTails = () =>
    lessons
      .filter(lesson => lesson.semester === Number(semesterSelectValue))
      .map((lesson, index) => <Tail key={index} title={lesson.name} id={lesson.code} />);

  return (
    <div className="container">
      <div className="form-style">
        <form className="styled-select form">
          <Select
            options={selectOptions}
            name="semester"
            defaultValue={selectOptions[0]}
            onChange={handleChange}
          />
        </form>
      </div>
      <div className="container-content">
        {/* <Loader /> */}
        {lessons === false ? <Loader /> : <div className="tail-container">{convertTails()}</div>}
      </div>
    </div>
  );
};

export default TailContainer;
