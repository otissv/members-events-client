/*
 * Aplication routes
 */
'use strict';

import { Router, IndexRoute, Route } from 'react-router';
import container from './containers/component-container.jsx';
import isAuthuthoried from './containers/isAuthuthoried-container.jsx';
import authForm from './containers/auth-form-container.jsx';

import Layout from './components/application/layout-application.jsx';
import Signup from './components/auth/signup-auth.jsx';
import Signin from './components/auth/signin-auth.jsx';
import Signout from './components/auth/signout-auth.jsx';
import Home from './components/public/home-public.jsx';
import MyAccount from './components/settings/my-account-setttings.jsx';
import Users from './components/users/list-users.jsx';


import {
  MY_ACCOUNT,
  SIGNIN,
  SIGNOUT,
  SIGNUP,
  USERS
} from './contants';


export default (
  <Router path='/' component={container(Layout)}>
    <IndexRoute component={Home} />
    <Route path={USERS} component={isAuthuthoried(Users, '/signin')} />
    <Route path={MY_ACCOUNT} component={isAuthuthoried(MyAccount, '/signin')} />
    <Route path={SIGNUP} component={authForm(Signup, 'SignupForm')} />
    <Route path={SIGNOUT} component={container(Signout)} />
    <Route path={SIGNIN} component={authForm(Signin, 'SigninForm')} />
  </Router>
);
