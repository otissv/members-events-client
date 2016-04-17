/*
 * Aplication routes
 */
'use strict';

import { Router, IndexRoute, Route } from 'react-router';

import AuthForm from './containers/auth/auth-form-container.jsx';
import IsAuthuthoried from './containers/auth/isAuthuthoried-container.jsx';
import Container from './containers/component-container.jsx';
import UsersListContainer from './containers/users/list-users-container.jsx';
import UserContainer from './containers/users/user-container.jsx';
import UserForm from './containers/users/user-form-container.jsx';


import Home from './components/public/home-public.jsx';
import About from './components/public/about-public.jsx';
import Contacts from './components/public/contacts-public.jsx';
import Services from './components/public/services-public.jsx';
import Layout from './components/application/layout-application.jsx';
import MyAccount from './components/settings/my-account-setttings.jsx';
import Signup from './components/auth/signup-auth.jsx';
import Signin from './components/auth/signin-auth.jsx';
import Signout from './components/auth/signout-auth.jsx';
import EditUser from './components/users/edit-user.jsx';

import {
  ABOUT,
  CONTACTS,
  MY_ACCOUNT,
  SEVICES,
  SIGNIN,
  SIGNOUT,
  SIGNUP,
  USER,
  USERS,
  USER_EDIT
} from './contants';

const SignupRoute = AuthForm(Signup, 'SignupForm');
const SignoutRoute = Container(Signout);
const SigninRoute = AuthForm(Signin, 'SigninForm');
const MyAccoutRoute = IsAuthuthoried(MyAccount, '/signin');
const UsersListRoute = IsAuthuthoried(UsersListContainer);
const UserRoute = IsAuthuthoried(UserContainer);
const EditUserRoute = UserForm(EditUser, 'EditUserForm');


export default (
  <Router path='/' component={Container(Layout)}>
    <IndexRoute component={Home} />
    <Route path={ABOUT} component={About} />
    <Route path={CONTACTS} component={Contacts} />
    <Route path={USERS} component={UsersListRoute} />
    <Route path={USER} component={UserRoute}/>
    <Route path={USER_EDIT} component={EditUserRoute}/>
    <Route path={MY_ACCOUNT} component={MyAccoutRoute} />
    <Route path={SEVICES} component={Services} />
    <Route path={SIGNUP} component={SignupRoute} />
    <Route path={SIGNOUT} component={SignoutRoute} />
    <Route path={SIGNIN} component={SigninRoute} />
  </Router>
);
