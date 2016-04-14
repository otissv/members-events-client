/*
 * Aplication routes
 */
'use strict';

import { Router, IndexRoute, Route } from 'react-router';

import isAuthuthoried from './containers/isAuthuthoried-application.jsx';
import Layout from './containers/layout-container.jsx';

import Singup from './components/auth/signup-auth.jsx';
import Singin from './components/auth/signin-auth.jsx';
import Singout from './containers/signout-container.jsx';
import Home from './components/public/home-public.jsx';
import MyAccount from './components/settings/my-account-setttings.jsx';

import {
  MY_ACCOUNT,
  SIGNIN,
  SIGNOUT,
  SIGNUP
} from './contants';


export default (
  <Router path='/' component={Layout}>
    <IndexRoute component={Home} />
    <Route path={MY_ACCOUNT} component={isAuthuthoried(MyAccount)} />
    <Route path={SIGNUP} component={Singup} />
    <Route path={SIGNOUT} component={Singout} />
    <Route path={SIGNIN} component={Singin} />
  </Router>
);
