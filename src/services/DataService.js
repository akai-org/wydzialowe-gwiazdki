import { firebase } from '../firebase';

export class DataService {
  get = (what, ok) => {
    firebase
      .database()
      .ref('/' + what)
      .once('value')
      .then(snapshot => {
        ok(snapshot.val());
      });
  };
}
