'use strict';


import { propTypes } from '../../helpers';

class Users extends React.Component {

  // componentWillReceiveProps (nextProps, nextState) {
  //   return deepEqual(nextProps.usersAll, this.props.usersAll);
  // }

  render () {
    const items = this.props.usersAll.map(item => {
     return <li>
      <ul>
        <li>ID: {item._id}</li>
        <li>Roles: {item.roles}</li>
        <li>Username: {item.username}</li>
      </ul>
    </li>;
    });

    return <div>
      <h1>Users</h1>
      <ul>{items}</ul>
    </div>;
  }
}

export default Users;


Users.propTypes = propTypes;
