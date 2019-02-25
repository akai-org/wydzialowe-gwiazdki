import { firebase } from './../firebase';

export const LoginService = {
  signIn: function(name, pass, login, error) {
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

  signOut: function(out) {
    firebase.auth().signOut();
    out();
  },

  checkAuth: function(yes, no) {
    firebase.auth().onAuthStateChanged(user => {
      user ? yes() : no();
    });
  }
};
