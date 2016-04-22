/*
 * Aplication routes
 */


import { Router, IndexRoute, Route } from 'react-router';

import AuthForm from './containers/auth/auth-form-container.jsx';
import IsAuthuthoried from './containers/auth/isAuthuthoried-container.jsx';
import Signup from './components/auth/signup-auth.jsx';
import Signin from './components/auth/signin-auth.jsx';
import Signout from './components/auth/signout-auth.jsx';

import CoursesListContainer from './containers/courses/list-course-container.jsx';
import CourseContainer from './containers/courses/course-container.jsx';
import CourseForm from './containers/courses/course-form-container.jsx';
import CourseEdit from './components/courses/edit-courses.jsx';

import EventsListContainer from './containers/events/list-events-container.jsx';
import EventContainer from './containers/events/event-container.jsx';
import EventForm from './containers/events/event-form-container.jsx';
import EventEdit from './components/events/edit-events.jsx';

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
  COURSES_ROUTE,
  COURSE_EDIT_ROUTE,
  EVENTS_ROUTE,
  EVENT_EDIT_ROUTE,
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
const EventsListRoute = IsAuthuthoried(EventsListContainer);
const EventRoute = IsAuthuthoried(EventContainer);

const CourseEditRoute = CourseForm(CourseEdit, 'CourseEditForm');
const CoursesListRoute = IsAuthuthoried(CoursesListContainer);
const CourseRoute = IsAuthuthoried(CourseContainer);

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

    <Route path={COURSES_ROUTE} component={CoursesListRoute} />
    <Route path={`${COURSES_ROUTE}/:userId`} component={CourseRoute}/>
    <Route path={`${COURSE_EDIT_ROUTE}/:userId`} component={CourseEditRoute}/>

    <Route path={EVENTS_ROUTE} component={EventsListRoute} />
    <Route path={`${EVENTS_ROUTE}/:userId`} component={EventRoute}/>
    <Route path={`${EVENT_EDIT_ROUTE}/:userId`} component={EventEditRoute}/>

    <Route path={SIGNUP_ROUTE} component={SignupRoute} />
    <Route path={SIGNOUT_ROUTE} component={SignoutRoute} />
    <Route path={SIGNIN_ROUTE} component={SigninRoute} />

    <Route path={USERS_ROUTE} component={UsersListRoute} />
    <Route path={`${USERS_ROUTE}/:userId`} component={UserRoute}/>
    <Route path={`${USER_EDIT_ROUTE}/:userId`} component={UserEditRoute}/>

    <Route path={MY_ACCOUNT_ROUTE} component={MyAccoutRoute} />
  </Router>
);
