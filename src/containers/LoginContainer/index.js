import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { firebase } from '../../firebase';
import './index.scss';

class LoginContainer extends Component {
  constructor() {
    super();
    this.state = {
      showCommunicate: false
    };
  }

  isSign = () => {
    // let a = null;

    // firebase
    //   .database()
    //   .ref(`tokens/${authCookie}/uid`)
    //   .on('value', snapshot => {
    //     // console.log(snapshot.val());
    //     // console.log(authCookie);
    //     console.log(snapshot.val());
    //     a = snapshot.val();
    //     if (a === null) {
    //       a = false;
    //     } else {
    //       a = true;
    //     }
    //   });
    // return a;
    firebase.auth().onAuthStateChanged(user => {
      const ret = !!user;

      return ret;
    });
  };

  signIn = () => {
    const name = document.getElementById('name').value;
    const pass = document.getElementById('pass').value;
    firebase
      .auth()
      .signInWithEmailAndPassword(name, pass)
      .then(() => {
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            // const date = new Date();
            // console.log(user.refreshToken);
            // firebase
            //   .database()
            //   .ref(`tokens/${user.refreshToken}`)
            //   .set({
            //     uid: user.uid,
            //     date: date.toTimeString()
            //   });
            // date.setTime(date.getTime() + 10 * 1000);
            // document.cookie = `token=${user.refreshToken}; expires=10000`;
          }
        });
      })
      .catch(() => {
        this.setState({
          showCommunicate: true
        });
      });
  };

  signOut = () => {
    firebase.auth().signOut();
  };

  render() {
    const cookie = document.cookie.split(/; */)[0].split('=');
    console.log(this.isSign(cookie[1]));
    return (
      <div className="LoginContainer">
        <div className="LoginBox">
          <h1>Logowanie</h1>
          <div className="error">
            {this.state.showCommunicate ? 'Nie poprawny email lub hasło' : ''}
          </div>
          <div className="TextBox">
            <FontAwesomeIcon className="icon" icon={['fas', 'user']} />
            <input
              type="text"
              placeholder="Podaj email"
              // value="nazwa@nazwa.pl"
              id="name"
              // className="name"
              name="login"
            />
          </div>
          <div className="TextBox">
            <FontAwesomeIcon className="icon" icon={['fas', 'key']} />
            <input
              type="password"
              placeholder="Podaj Hasło"
              // value="Haslo12"
              id="pass"
              className="pass"
              name="password"
            />
          </div>
          <br />
          <input type="checkbox" value="remember" /> Zapamiętaj mnie
          <br />
          <input
            className="Button submit"
            onClick={this.signIn}
            type="button"
            name="submit"
            value="Zaloguj się"
          />
          <div className="Register">
            Jeśli nie masz konta{' '}
            <a className="RegisterText" href="/register">
              zarejestruj się.
            </a>
          </div>
          {/* <StyledFirebaseAuth
        firebaseAuth={firebase.auth()}
        uiConfig={uiConfig}
      /> */}
        </div>
      </div>
    );
  }
}

export default LoginContainer;
