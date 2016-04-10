/*
* Application navigation
 */

'use strict';

import { Link } from 'react-router';

const Navigation = (props) => (
  <ul>
    <Link to='/signup'>Signup</Link>
    <Link to='/page2'>Page2</Link>
  </ul>
);

export default Navigation;
