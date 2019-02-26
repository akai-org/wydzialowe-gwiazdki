import React, { Component } from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { AuthService } from '../../services/AuthService';

import './index.scss';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Communicate: false,
      CommunicateSucces: false
    };
    this.lostPass = this.lostPass.bind(this);
  }

  lostPass() {
    const email = document.getElementById('email').value;
    AuthService.lostPass(
      email,
      () => {
        this.setState({
          CommunicateSucces: true,
          Communicate: false
        });
      },
      err => {
        this.setState({ Communicate: true, CommunicateSucces: false });
      }
    );
  }

  render() {
    return (
      <div className="RegistrationContainer">
        <div className="RegistrationBox">
          <h1>Przypomnij Hasło</h1>
          <div className="TextBox">
            <FontAwesomeIcon className="icon" icon={['fas', 'user']} />
            <input type="text" placeholder="Podaj e-mail" id="email" />
          </div>

          <input
            className="Button"
            type="button"
            name=""
            onClick={this.lostPass}
            value="Przypomnij hasło!"
          />
          <div className="Login">
            {/* TODO -odnoscnik do logowanie i select  */}
            Jeżeli masz konto{' '}
            <Link className="LoginText" to="/login">
              zaloguj się.
            </Link>
            <br />
            Nie masz konta ?{' '}
            <Link className="LoginText" to="/register">
              zarejestruj się
            </Link>
            <div className="error">
              {this.state.Communicate ? 'Nie znaleziono adresu email' : '   '}
            </div>
            <div className="succes">
              {this.state.CommunicateSucces
                ? 'Sukces! Instrukcje dotyczące zmiany hasła zostały wysłane na email'
                : '   '}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Registration;
