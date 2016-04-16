'use strict';


import { objectToArray } from '../../helpers';
import { propTypes } from '../../props';
import { Link } from 'react-router';


class Users extends React.Component {
  constructor (props) {
    super(props);

    this.handleSetUser =  this.handleSetUser.bind(this);
  }


  handleSetUser (e) {
    const userId = e.target.dataset.userid;

    this.props.selectUser(userId);
  }


  render () {
    const items = objectToArray(this.props.usersAll).map(item => {
      return <li key={item._id}>
        <Link
          data-userId={item._id}
          onClick={this.handleSetUser}
          to={`/users/:userId`}
        >
          {item.username}
        </Link>
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
