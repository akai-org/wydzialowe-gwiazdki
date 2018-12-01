import React, { Component } from 'react';
import * as firebase from 'firebase';
// import db from "./../../firebase";
import './index.scss';

function write() {
  firebase
    .database()
    .ref('users/1')
    .set({
      name: 'jarek',
      surname: 'daniel'
    });
  console.log('dziaba');
}
write();

class LoginContainer extends Component {
  render() {
    return (
      <div className="LoginContainer">
        <form method="POST" action="dsdw.js">
          <label>Login:</label>
          <br />
          <input type="text" className="name" name="login" />
          <br />
          <label>Hasło:</label>
          <br />
          <input type="password" className="pass" name="password" />
          <br />
          <input type="checkbox" value="remember" /> Zapamiętaj mnie
          <br />
          <input type="submit" className="submit" name="submit" value="Login" />
          <br />
          <a href="/register">Nie masz jeszcze konta ?</a>
        </form>
      </div>
    );
  }
}

export default LoginContainer;
