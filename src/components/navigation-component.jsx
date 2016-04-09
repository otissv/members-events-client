'use strict';

import { Link } from 'react-router';

const Navigation = (props) => (
  <ul>
    <Link to='/page1'>Page1</Link>
    <Link to='/page2'>Page2</Link>
  </ul>
);

export default Navigation;
