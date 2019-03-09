import { firebase } from '../firebase';
import { normalize } from 'path';

export class DataService {
  get = (
    where,
    ok,
    no = err => {
      console.log('Błąd bazy danych: ' + err);
    }
  ) => {
    firebase
      .database()
      .ref('/' + where)
      .once('value')
      .then(snapshot => {
        console.log(snapshot.val());
        ok(snapshot.val());
      })
      .catch(err => {
        no(err);
      });
  };

  set = (
    where,
    data,
    ok,
    no = err => {
      console.log('Błąd bazy danych: ' + err);
    }
  ) => {
    firebase
      .database()
      .ref('/' + where)
      .set(data)
      .then(snapshot => {
        ok(snapshot);
      })
      .catch(snapshot => {
        no(snapshot);
      });
  };
}
