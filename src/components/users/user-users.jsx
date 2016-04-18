'use strict';


import { propTypes } from '../../props';
import { Link } from 'react-router';

class User extends React.Component {
  constructor (props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    const {
      removeUserFromList,
      deleteUser,
      selectUser,
      selectedUser,
      setUser,
      storage,
      usersAll
    } = this.props;

    const { _id, token } = storage;

    deleteUser(_id, token, selectedUser).payload
      .then(response => {
        if(!response.data.success) {
          console.log(response.data.message);
        }

        removeUserFromList(usersAll, selectedUser);
        setUser({});
        selectUser(null);
      });
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


      <Link to={`/users/edit/${selectedUser}`} >Edit</Link>
      <a href='#' onClick={this.handleDelete}>Detele</a>
    </div>;
  }

}

export default User;


User.propTypes = propTypes;
