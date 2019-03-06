import React from 'react';
import Logo from './../../components/Header/logo2.png';
import { Link } from 'react-router-dom';

import './index.scss';

const AdminHeader = () => (
  <div className="admin-header">
    <img src={Logo} alt="logo" className="logo" />
    <h1>Panel </h1>
    <h1 className="header-text"> Administracyjny</h1>
    <div className="menu">
      <Link className="Link" to="/admin/subjects">
        Przedmioty
      </Link>
      <Link className="Link" to="/admin/Lecture">
        Wykładowcy
      </Link>
      <Link className="Link" to="/admin/users">
        Użytkownicy
      </Link>
      <Link className="Link" to="/admin/database">
        Backup
      </Link>
    </div>
  </div>
);

export default AdminHeader;
