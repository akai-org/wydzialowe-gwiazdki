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
      CommunicateSucces: false,
      Section: 1
    };
    this.register = this.register.bind(this);
  }

  selectOptions = [
    { value: 1, label: 'Wydział Architektury' },
    { value: 2, label: 'Wydział Budownictwa i Inzynierii Środowiska' },
    { value: 3, label: 'Wydział Budowy Maszyn i Zarządzania' },
    { value: 4, label: 'Wydział Elektroniki i Telekomunikacji' },
    { value: 5, label: 'Wydział Elektryczny' },
    { value: 6, label: 'Wydział Fizyki Technicznej' },
    { value: 7, label: 'Wydział Informatyki' },
    { value: 8, label: 'Wydział Inzynierii Transportu' },
    { value: 9, label: 'Wydział Inżynierii Środowiska' },
    { value: 10, label: 'Wydział Technologii Chemicznej' }
  ];

  handleChange = option => this.setState({ Section: option.value });

  colourStyles = {
    option: (styles, { isDisabled, isFocused }) => ({
      ...styles,
      backgroundColor: isDisabled ? null : isFocused ? '#dbdbdb' : '#e9e9e9',
      color: 'black'
    }),
    control: styles => ({
      ...styles,
      backgroundColor: '#e9e9e9',
      border: 'none',
      ':active': {
        border: 'none'
      },
      ':hover': {
        border: 'none'
      },
      boxShadow: 'none'
    }),
    menuList: styles => ({
      ...styles,
      backgroundColor: '#e9e9e9',
      paddingTop: 0,
      paddingBottom: 0
    })
  };

  register() {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    const pass2 = document.getElementById('pass2').value;
    const select = this.state.Section;
    AuthService.register(
      email,
      pass,
      pass2,
      select,
      () => {
        this.setState({
          text: 'Pomyślnie utworzono konto, Potwierdź email i zaloguj się! ',
          CommunicateSucces: true,
          Communicate: false
        });
      },
      err => {
        this.setState({ text: err, Communicate: true, CommunicateSucces: false });
      }
    );
  }

  render() {
    return (
      <div className="RegistrationContainer">
        <div className="RegistrationBox">
          <h1>Rejestracja</h1>
          <div className="TextBox">
            <FontAwesomeIcon className="icon" icon={['fas', 'user']} />
            <input type="text" placeholder="Podaj e-mail" id="email" />
          </div>
          <div className="TextBox">
            <FontAwesomeIcon className="icon" icon={['fas', 'key']} />
            <input type="password" placeholder="Podaj hasło" id="pass" />
          </div>
          <div className="TextBox">
            <FontAwesomeIcon className="icon" icon={['fas', 'key']} />
            <input type="password" placeholder="Powtórz hasło" id="pass2" />
          </div>

          <form className="styled-select">
            <Select
              options={this.selectOptions}
              name="wydzial"
              defaultValue={this.selectOptions[0]}
              onChange={this.handleChange}
              styles={this.colourStyles}
              // maxMenuHeight={230}
            />
          </form>
          <input
            className="Button"
            type="button"
            name=""
            onClick={this.register}
            value="Zarejestruj sie!"
          />
          <div className="Login">
            {/* TODO -odnoscnik do logowanie i select  */}
            Jeżeli masz konto{' '}
            <Link className="LoginText" to="/login">
              zaloguj się.
            </Link>
            <div className="error">{this.state.Communicate ? this.state.text : '   '}</div>
            <div className="succes">{this.state.CommunicateSucces ? this.state.text : '   '}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Registration;
