'use strict';


import { propTypes } from '../../helpers';

const User = (props) => {
  const { user } = props;

  return <div>
    <h1>User Profile</h1>
    Name: {props.user.username}
    Roles {props.user.roles}
  </div>;

};

export default User;


User.propTypes = propTypes;
