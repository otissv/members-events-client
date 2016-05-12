/*
 * Aplication routes
 */


import { Router, IndexRoute, Route } from 'react-router';

import AuthForm from './containers/auth/auth-form-container.jsx';
import IsAuthuthoried from './containers/auth/isAuthuthoried-container.jsx';
import Signup from './components/auth/signup-auth.jsx';
import Signin from './components/auth/signin-auth.jsx';
import Signout from './components/auth/signout-auth.jsx';

import CategoriesListContainer from './containers/categories/list-category-container.jsx';
import CategoryContainer from './containers/categories/category-container.jsx';
import CategoryForm from './containers/categories/category-form-container.jsx';
import CategoryEdit from './components/categories/edit-categories.jsx';
import CategoryNew from './components/categories/new-category.jsx';

import EventsListContainer from './containers/events/list-events-container.jsx';
import EventContainer from './containers/events/event-container.jsx';
import EventForm from './containers/events/event-form-container.jsx';
import EventEdit from './components/events/edit-events.jsx';
import EventNew from './components/events/new-events.jsx';


import UsersListContainer from './containers/users/list-users-container.jsx';
import UserContainer from './containers/users/user-container.jsx';
import UserForm from './containers/users/user-form-container.jsx';
import UserEdit from './components/users/edit-users.jsx';

import Container from './containers/component-container.jsx';

import Home from './components/public/home-public.jsx';
import About from './components/public/about-public.jsx';
import Contacts from './components/public/contacts-public.jsx';
import Services from './components/public/services-public.jsx';
import Layout from './components/application/layout-application.jsx';
import MyAccount from './components/settings/my-account-setttings.jsx';


import {
  ABOUT_ROUTE,
  CONTACTS_ROUTE,
  CATEGORIES_ROUTE,
  CATEGORY_EDIT_ROUTE,
  CATEGORY_NEW_ROUTE,
  EVENTS_ROUTE,
  EVENT_EDIT_ROUTE,
  EVENT_NEW_ROUTE,
  MY_ACCOUNT_ROUTE,
  SEVICES_ROUTE,
  SIGNIN_ROUTE,
  SIGNOUT_ROUTE,
  SIGNUP_ROUTE,
  USERS_ROUTE,
  USER_EDIT_ROUTE
} from './contants';


const MyAccoutRoute = IsAuthuthoried(MyAccount, '/signin');

const EventEditRoute = EventForm(EventEdit, 'EventEditForm');
const EventNewRoute = EventForm(EventNew, 'EventNewForm');
const EventsListRoute = IsAuthuthoried(EventsListContainer);
const EventRoute = IsAuthuthoried(EventContainer);


const CategoryEditRoute = CategoryForm(CategoryEdit, 'CategoryEditForm');
const CategoryNewRoute = CategoryForm(CategoryNew, 'CategoryNewForm');
const CategoriesListRoute = IsAuthuthoried(CategoriesListContainer);
const CategoryRoute = IsAuthuthoried(CategoryContainer);

const SignupRoute = AuthForm(Signup, 'SignupForm');
const SignoutRoute = Container(Signout);
const SigninRoute = AuthForm(Signin, 'SigninForm');

const UserEditRoute = UserForm(UserEdit, 'UserEditForm');
const UsersListRoute = IsAuthuthoried(UsersListContainer);
const UserRoute = IsAuthuthoried(UserContainer);

export default (
  <Router path='/' component={Container(Layout)}>
    <IndexRoute component={Home} />
    <Route path={ABOUT_ROUTE} component={About} />
    <Route path={CONTACTS_ROUTE} component={Contacts} />
    <Route path={SEVICES_ROUTE} component={Services} />

    <Route path={CATEGORIES_ROUTE} component={CategoriesListRoute} />
    <Route path={`${CATEGORIES_ROUTE}/:userId`} component={CategoryRoute}/>
    <Route path={`${CATEGORY_EDIT_ROUTE}/:userId`} component={CategoryEditRoute}/>
    <Route path={`${CATEGORY_NEW_ROUTE}`} component={CategoryNewRoute}/>

    <Route path={EVENTS_ROUTE} component={EventsListRoute} />
    <Route path={`${EVENTS_ROUTE}/:userId`} component={EventRoute}/>
    <Route path={`${EVENT_EDIT_ROUTE}/:userId`} component={EventEditRoute}/>
    <Route path={`${EVENT_NEW_ROUTE}`} component={EventNewRoute}/>


    <Route path={SIGNUP_ROUTE} component={SignupRoute} />
    <Route path={SIGNOUT_ROUTE} component={SignoutRoute} />
    <Route path={SIGNIN_ROUTE} component={SigninRoute} />

    <Route path={USERS_ROUTE} component={UsersListRoute} />
    <Route path={`${USERS_ROUTE}/:userId`} component={UserRoute}/>
    <Route path={`${USER_EDIT_ROUTE}/:userId`} component={UserEditRoute}/>

    <Route path={MY_ACCOUNT_ROUTE} component={MyAccoutRoute} />
  </Router>
);
