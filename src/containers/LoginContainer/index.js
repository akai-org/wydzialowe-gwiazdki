import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './index.scss';

import { AuthService } from '../../services/AuthService';

function LoginContainer(props) {
  const [showCommunicate, setCommunicate] = useState(false);

  new AuthService.checkAuth(() => {
    props.history.push('/mainpage');
  });

  const checkAuth = () => {
    new AuthService.checkAuth(
      () => {
        console.log('Autoryzacja potwierdzona');
      },
      () => {
        console.log('Brak autoryzacji');
      }
    );
  };
  const signIn = () => {
    const name = document.getElementById('name').value;
    const pass = document.getElementById('pass').value;
    new AuthService.signIn(
      name,
      pass,
      () => {
        props.history.push('/mainpage');
      },
      () => {
        setCommunicate(true);
      }
    );
  };

  const signOut = () => {
    new AuthService.signOut(() => {
      console.log('Wylogowano');
    });
  };
  return (
    <div className="LoginContainer">
      <div className="LoginBox">
        <h1>Logowanie</h1>
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
          onClick={() => signIn()}
          type="button"
          name="submit"
          value="Zaloguj się"
        />
        <input
          className="Button submit"
          onClick={checkAuth}
          type="button"
          name="submit"
          value="Sprawdz"
        />
        <input
          className="Button submit"
          onClick={signOut}
          type="button"
          name="submit"
          value="Wyloguj"
        />
        <div className="Register">
          Jeśli nie masz konta{' '}
          <Link className="RegisterText" to="/register">
            zarejestruj się.
          </Link>
          <br />
          Nie pamiętasz hasła ?{' '}
          <Link className="RegisterText" to="/lostPass">
            przypomnij hasło
          </Link>
          <div className="error">{showCommunicate ? 'Nie poprawny email lub hasło' : '   '}</div>
        </div>
      </div>
    </div>
  );
}

export default LoginContainer;
