import { database } from '../firebase/firebase';

const lessonsRef = database.ref('lessons');

const convertArray = snapshot => {
  const array = [];
  snapshot.forEach(a => {
    array.push({
      id: a.key,
      ...a.val()
    });
  });
  return array;
};

export const getLessons = () => lessonsRef.once('value').then(convertArray);
