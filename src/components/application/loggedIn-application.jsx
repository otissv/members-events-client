/*
* Logged in to application layout
 */

'use strict';

import { Link } from 'react-router';
import {

} from '../../contants';


const NotLoggedIn = (props) => (
  <ul className='uk-list'>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/my-account'>Account</Link></li>
    <li><Link to='/users'>Users</Link></li>
    <li><Link to='/courses'>Courses</Link></li>
    <li><Link to='/events'>Events</Link></li>
    <li><Link to='/signout'>Signout</Link></li>
  </ul>
);

NotLoggedIn.propTypes = {
  display: React.PropTypes.bool
};

export default NotLoggedIn;
