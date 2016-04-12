/*
* Not Logged in to application
 */

'use strict';

import { Link } from 'react-router';
import {
  ABOUT,
  CONTACT,
  ROOT,
  SEVICES,
  SIGNIN,
  SIGNUP
} from '../../contants';

const NotLoggedIn = (props) => (
  <ul className='uk-list'>
    <li><Link to={ROOT}>Home</Link></li>
    <li><Link to={SEVICES}>Service</Link></li>
    <li><Link to={ABOUT}>About</Link></li>
    <li><Link to={CONTACT}>Contact</Link></li>
    <li><Link to={SIGNIN}>Signin</Link></li>
    <li><Link to={SIGNUP}>Signup</Link></li>
  </ul>
);


NotLoggedIn.propTypes = {
  display: React.PropTypes.bool
};

export default NotLoggedIn;
