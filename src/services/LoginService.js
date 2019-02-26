import { firebase } from '../firebase';

export const LoginService = {
  signIn(name, pass, login, error) {
    firebase
      .auth()
      .signInWithEmailAndPassword(name, pass)
      .then(() => {
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            login();
          }
        });
      })
      .catch(() => {
        error();
      });
  },

  signOut(out) {
    firebase.auth().signOut();
    out();
  },

  checkAuth(yes, no) {
    firebase.auth().onAuthStateChanged(user => {
      user ? yes() : no();
    });
  },

  getLessons() {
    firebase
      .database()
      .ref('/lessons')
      .once('value')
      .then(snapshot => 
         snapshot.val()
        // console.log(snapshot.val());
      );
  }
};
