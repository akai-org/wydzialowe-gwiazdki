import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { firebase } from '../../firebase';
import './index.scss';

function LoginContainer(props) {
  const [showCommunicate, setCommunicate] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {});
  const wyl = () => {
    firebase.auth().signOut();
  };
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
            props.history.push('/subjects');
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
      <button onClick={wyl}>Wyloguj</button>
      <a href="/register">Nie masz jeszcze konta ?</a>
    </div>
  );
}

LoginContainer.propTypes = {
  history: PropTypes.object.isRequired
};

export default LoginContainer;
