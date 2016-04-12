/*
 * Aplication routes
 */
'use strict';

import { Router, IndexRoute, Route } from 'react-router';
import {
  MY_ACCOUNT,
  SIGNIN,
  SIGNUP
} from './contants';


import Layout from './components/application/layout-application.jsx';
import Singup from './components/auth/signup-auth.jsx';
import Singin from './components/auth/signin-auth.jsx';
import Home from './components/public/home-public.jsx';
import MyAccount from './components/settings/my-account-setttings.jsx';

export default (
  <Router path='/' component={Layout}>
    <IndexRoute component={Home} />
    <Route path={SIGNUP} component={Singup} />
    <Route path={SIGNIN} component={Singin} />
    <Route path={MY_ACCOUNT} component={MyAccount} />
  </Router>
);
