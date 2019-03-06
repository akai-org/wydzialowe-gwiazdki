// import React from 'react';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Footer from '../../components/Footer';
import AdminHeader from '../../adminComponents/AdminHeader';
import subjects from './../../admin/subjects';

function AdminLayoutContainer() {
  return (
    <div className="LayoutContainer">
      <AdminHeader title="WydziałoweGwizadki" />
      <Router>
        <Switch>
          <Route path="/admin/" component={subjects} />
        </Switch>
      </Router>
      <Footer />

      <h1>dfefefef</h1>
    </div>
  );
}

export default AdminLayoutContainer;
