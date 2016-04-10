/*
 * Aplication routes
 */
'use strict';

import { Router, IndexRoute, Route } from 'react-router';

import LayoutComponent from './components/application/layout-application.jsx';
import SignupComponent from './components/auth/signup-auth.jsx';
import Page2Component from './components/page-2-component.jsx';


export default (
  <Router path='/' component={LayoutComponent}>
    <IndexRoute component={Page2Component} />
    <Route path='Signup' component={SignupComponent} />
    <Route path='page2' component={Page2Component} />
  </Router>
);
