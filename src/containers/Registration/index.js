import React, { Component } from 'react';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.scss';

class Registration extends Component {
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

  render() {
    return (
      <div className="RegistrationContainer">
        <div className="RegistrationBox">
          <h1>Rejestracja</h1>
          <div className="TextBox">
            <FontAwesomeIcon className="icon" icon={['fas', 'user']} />
            <input type="text" placeholder="Podaj e-mail" />
          </div>
          <div className="TextBox">
            <FontAwesomeIcon className="icon" icon={['fas', 'key']} />
            <input type="password" placeholder="Podaj hasło" />
          </div>
          <div className="TextBox">
            <FontAwesomeIcon className="icon" icon={['fas', 'key']} />
            <input type="password" placeholder="Powtórz hasło" />
          </div>
          {/* <div className="TextBox">
                        <select>
                            <option value="Wydział_Architektury">Wydział Architektury</option>
                            <option value="Wydział_Budownictwa_i_Inzynierii_Środowiska">Wydział Budownictwa i Inzynierii Środowiska</option>
                            <option value="Wydział_Budowy_Maszyn_i_Zarządzania">Wydział Budowy Maszyn i Zarządzania</option>
                            <option value="Wydział_Elektroniki_i_Telekomunikacji">Wydział Elektroniki i Telekomunikacji</option>
                            <option value="Wydział_Elektryczny">Wydział Elektryczny</option>
                            <option value="Wydział_Fizyki_Technicznej">Wydział Fizyki Technicznej</option>
                            <option value="Wydział_Informatyki">Wydział Informatyki</option>
                            <option value="Wydział_Inzynierii_Transportu">Wydział Inzynierii Transportu</option>
                            <option value="Wydział_Inżynierii_Środowiska">Wydział Inżynierii Środowiska</option>
                            <option value="Wydział_Technologii_Chemicznej">Wydział Technologii Chemicznej</option>
                        </select><br></br>
                        </div> */}
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
          <input className="Button" type="button" name="" value="Zarejestruj sie!" />
          <div className="Login">
            {/* TODO -odnoscnik do logowanie i select  */}
            Jeżeli masz konto{' '}
            <a className="LoginText" href="/login">
              zaloguj się.
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Registration;
