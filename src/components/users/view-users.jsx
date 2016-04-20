'use strict';


import {
  USERS_ROUTE,
  USER_EDIT_ROUTE
} from '../../contants';

import { propTypes } from '../../props';
import { Link } from 'react-router';
import deleteUser from './delete-users';


class User extends React.Component {
  constructor (props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    deleteUser(this.props);
  }

  render () {
    const { user, selectedUser } = this.props;

    return <div>
      <h1>User Profile</h1>
      Name: {user.username}<br />
      First Name: {user.firstName}<br />
      Last Name: {user.LastName}<br />
      Email: {user.email}<br />
      Roles: {user.roles}<br />

      Adddres1: {user.address ? user.address.address1 : ''} <br />
      Adddres2: {user.address ? user.address.address2: ''}<br />
      City: {user.address ? user.address.city : ''}<br />
      State: {user.address ? user.address.state : ''}<br />
      Postcode: {user.address ? user.address.postcode : ''}<br />

      <Link to={USERS_ROUTE} >Back</Link>
      <Link to={`${USER_EDIT_ROUTE}/${selectedUser}`} >Edit</Link>
      <a href='#' onClick={this.handleDelete}>Detele</a>
    </div>;
  }

}

export default User;


User.propTypes = propTypes;
