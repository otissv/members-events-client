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
    const {
      user,
      selectedUser
    } = this.props;

    return <div>
      <h1>User Profile</h1>
      Name: {user.username}
      Roles {user.roles}
      <Link to={`/users/edit/${selectedUser}`} >Edit</Link>
      <a href='#' onClick={this.handleDelete}>Detele</a>
    </div>;
  }

}

export default User;


User.propTypes = propTypes;
