import React, { Component } from 'react';
import { firebase } from '../../firebase';
import './index.scss';

// function write() {
//   firebase
//     .database()
//     .ref('users/').push()
//     .set({

//       name: 'MaciekS',
//       surname: 'Dejniak'

//     });
// }
// write();

// firebase.database().ref("tokens/dwadaw/uid").on("value", (snapshot) => {
//   console.log(snapshot.val());

//   (snapshot.val() === null) ? console.log("tak") : console.log("nie");
// });

class LoginContainer extends Component {
  constructor() {
    super();
    this.state = {
      showCommunicate: false
    };
  }

  isSign = authCookie => {
    let a = null;
    firebase
      .database()
      .ref(`tokens/${authCookie}/uid`)
      .on('value', snapshot => {
        // console.log(snapshot.val());
        // console.log(authCookie);
        console.log(snapshot.val());
        a = snapshot.val();
        if (a === null) {
          a = false;
        } else {
          a = true;
        }
      });
    return a;
  };

  signIn = () => {
    const name = document.getElementById('name').value;
    // console.log(name);
    const pass = document.getElementById('pass').value;
    // console.log(pass);

    firebase
      .auth()
      .signInWithEmailAndPassword(name, pass)
      .then(() => {
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            // const token = user.getIdToken()
            // console.log(token[1]);
            const date = new Date();
            console.log(user.refreshToken);
            firebase
              .database()
              .ref(`tokens/${user.refreshToken}`)
              .set({
                uid: user.uid,
                date: date.toTimeString()
              });

            date.setTime(date.getTime() + 10 * 1000);
            document.cookie = `token=${user.refreshToken}; expires=10000`;
          }
        });
      })
      .catch(() => {
        this.setState({
          showCommunicate: true
        });
      });
  };

  render() {
    const cookie = document.cookie.split(/; */)[0].split('=');
    console.log(this.isSign(cookie[1]));
    return (
      <div className="LoginContainer">
        <div className="error">
          {this.state.showCommunicate ? 'Nie poprawny email lub hasło' : ''}
        </div>
        <label>Login:</label>
        <br />
        <input type="text" value="nazwa@nazwa.pl" id="name" className="name" name="login" />
        <br />
        <label>Hasło:</label>
        <br />
        <input type="password" value="Haslo12" id="pass" className="pass" name="password" />
        <br />
        <input type="checkbox" value="remember" /> Zapamiętaj mnie
        <br />
        <input onClick={this.signIn} type="submit" className="submit" name="submit" value="Login" />
        <br />
        <a href="/register">Nie masz jeszcze konta ?</a>
      </div>
    );
  }
}

export default LoginContainer;
