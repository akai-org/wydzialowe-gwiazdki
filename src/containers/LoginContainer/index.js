import React, { useState, useEffect } from 'react';
import { createBrowserHistory } from 'history';
import { firebase } from '../../firebase';
import './index.scss';

const history = createBrowserHistory();

function LoginContainer() {
  const [showCommunicate, setCommunicate] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('Checkauth');
        history.push('/subjects');
      }
    });
  });

  const getLogin = log => {
    setLogin(log.target.value);
  };

  const getPassword = pass => {
    setPassword(pass.target.value);
  };

  const signIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(login, password)
      .then(() => {
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
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
            history.push('/subjects');
          }
        });
      })
      .catch(() => {
        setCommunicate(true);
      });
  };
  return (
    <div className="LoginContainer">
      <div className="error">{showCommunicate ? 'Nie poprawny email lub hasło' : ''}</div>
      <label>Login:</label>
      <br />
      <input type="text" id="name" className="name" name="login" onChange={getLogin} />
      <br />
      <label>Hasło:</label>
      <br />
      <input type="password" id="pass" className="pass" name="password" onChange={getPassword} />
      <br />
      <input type="checkbox" value="remember" /> Zapamiętaj mnie
      <br />
      <input onClick={signIn} type="submit" className="submit" name="submit" value="Login" />
      <br />
      <a href="/register">Nie masz jeszcze konta ?</a>
    </div>
  );
}

export default LoginContainer;
