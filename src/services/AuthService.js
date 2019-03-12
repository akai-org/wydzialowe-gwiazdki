import { firebase } from '../firebase';

export const AuthService = {
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

  register(email, pass, pass2, select, yes, no) {
    email = email.trim();
    let mes = '';
    let flag = true;
    if (pass !== pass2) {
      mes = 'Hasła nie są takie same!';
      flag = false;
    }
    const splitMail = email.split('@');
    if (splitMail[1] !== 'student.put.poznan.pl') {
      mes = 'Musisz użyć adresu z Politechniki!';
      flag = false;
    }

    if (flag === true) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, pass)
        .then(user => {
          yes();
          console.log(user.user.uid);
          firebase
            .database()
            .ref(`/users/${user.user.uid}`)
            .set({
              section: select
            });
        })
        .catch(error => {
          if (error) {
            switch (error.code) {
              case 'auth/invalid-email':
                error.message = 'Nieprawidłowy Adres Email!';
                break;

              case 'auth/email-already-in-use':
                error.message = 'Adres email jest już zajęty!';
                break;
              case 'auth/weak-password':
                error.message = 'Hasło jest za słabe!';
                break;
            }
            console.log(error.code);
            console.log(error.message);
            no(error.message);
          }
        });
    } else {
      no(mes);
    }
  },
  lostPass(email, yes, no) {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(el => {
        console.log(+'Przypomniano');
        yes();
      })
      .catch(err => {
        no();
        console.log(`${err}błąd`);
      });
  }
};
