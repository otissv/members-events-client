/*
* Not Logged in to application
 */

'use strict';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { propTypes, mapStateToProps } from '../../helpers';

import {
  ABOUT,
  CONTACT,
  COURSES,
  EVENTS,
  MY_ACCOUNT,
  ROOT,
  SEVICES,
  SIGNIN,
  SIGNOUT,
  SIGNUP,
  USERS
} from '../../contants';


const LoggedInNav = (props) => (
  <ul className='uk-list'>
    <li><Link to='/'>Home</Link></li>
    <li><Link to={MY_ACCOUNT}>Account</Link></li>
    <li><Link to={USERS}>Users</Link></li>
    <li><Link to={COURSES}>Courses</Link></li>
    <li><Link to={EVENTS}>Events</Link></li>
    <li><Link to={SIGNOUT}>Signout</Link></li>
  </ul>
);

const NotLoggedInNav = (props) => (
  <ul className='uk-list'>
    <li><Link to={USERS}>Users</Link></li>
    <li><Link to={ROOT}>Home</Link></li>
    <li><Link to={SEVICES}>Service</Link></li>
    <li><Link to={ABOUT}>About</Link></li>
    <li><Link to={CONTACT}>Contact</Link></li>
    <li><Link to={SIGNIN}>Signin</Link></li>
    <li><Link to={SIGNUP}>Signup</Link></li>
  </ul>
);


class Navigation extends React.Component{
  render () {
    return this.props.isLoggedIn ? <LoggedInNav/> : <NotLoggedInNav/>;
  }
}


Navigation.propTypes = propTypes;

export default connect(mapStateToProps)(Navigation);
