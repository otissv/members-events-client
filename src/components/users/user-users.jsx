'use strict';


import { propTypes } from '../../props';
import { Link } from 'react-router';

const User = (props) => {
  const {
    user,
    selectedUser
   } = props;

  return <div>
    <h1>User Profile</h1>
    Name: {props.user.username}
    Roles {props.user.roles}
    <Link to='/users/edit/${selectedUser}' >Edit</Link>

  </div>;

};

export default User;


User.propTypes = propTypes;
