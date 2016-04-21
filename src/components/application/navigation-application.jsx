/*
* Navigation component
 */


import { connect } from 'react-redux';
import { Link } from 'react-router';
import { propTypes, mapStateToProps } from '../../props';

import {
  ABOUT_ROUTE,
  CONTACTS_ROUTE,
  COURSES_ROUTE,
  EVENTS_ROUTE,
  MY_ACCOUNT_ROUTE,
  ROOT_ROUTE,
  SEVICES_ROUTE,
  SIGNIN_ROUTE,
  SIGNOUT_ROUTE,
  SIGNUP_ROUTE,
  USERS_ROUTE
} from '../../contants';


const LoggedInNav = (props) => (
  <ul className='uk-list'>
    <li><Link to={ROOT_ROUTE}>Home</Link></li>
    <li><Link to={MY_ACCOUNT_ROUTE}>Account</Link></li>
    <li><Link to={USERS_ROUTE}>Users</Link></li>
    <li><Link to={COURSES_ROUTE}>Courses</Link></li>
    <li><Link to={EVENTS_ROUTE}>Events</Link></li>
    <li><Link to={SIGNOUT_ROUTE}>Signout</Link></li>
  </ul>
);

const NotLoggedInNav = (props) => (
  <ul className='uk-list'>
    <li><Link to={ROOT_ROUTE}>Home</Link></li>
    <li><Link to={SEVICES_ROUTE}>Service</Link></li>
    <li><Link to={ABOUT_ROUTE}>About</Link></li>
    <li><Link to={CONTACTS_ROUTE}>Contacts</Link></li>
    <li><Link to={SIGNIN_ROUTE}>Signin</Link></li>
    <li><Link to={SIGNUP_ROUTE}>Signup</Link></li>
  </ul>
);


class Navigation extends React.Component{
  render () {
    return this.props.isLoggedIn ? <LoggedInNav/> : <NotLoggedInNav/>;
  }
}


Navigation.propTypes = propTypes;

export default connect(mapStateToProps)(Navigation);
