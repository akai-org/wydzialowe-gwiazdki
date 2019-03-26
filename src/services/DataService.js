import { firebase } from '../firebase';
import { ok } from 'assert';

export const DataService = {
  get(what, ok) {
    firebase
      .database()
      .ref('/' + what)
      .once('value')
      .then(snapshot => {
        ok(snapshot.val());
      });
  }
};
