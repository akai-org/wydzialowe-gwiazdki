import { ok } from 'assert';
import { firebase } from '../firebase';

export const DataService = {
  get(what, ok) {
    firebase
      .database()
      .ref(`/${  what}`)
      .once('value')
      .then(snapshot => {
        ok(snapshot.val());
      });
  }
};
