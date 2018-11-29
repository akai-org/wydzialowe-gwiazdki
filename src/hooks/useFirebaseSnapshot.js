import { useState } from 'react';
import { database } from '../firebase/firebase';

const convertArray = snapshot => {
  const array = [];
  snapshot.forEach(el => {
    array.push({
      id: el.key,
      ...el.val()
    });
  });
  return array;
};

export function useFirebaseSnapshot(key) {
  const [item, setItem] = useState(() => false);

  const refEndpoint = database.ref(key);

  refEndpoint
    .once('value')
    .then(convertArray)
    .then(val => setItem(val));

  const setValue = val =>
    refEndpoint.set(val, err => {
      if (!err) setItem(val);
    });

  return [item, setValue];
}
