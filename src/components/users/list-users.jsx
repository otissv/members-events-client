'use strict';


import { objectToArray } from '../../helpers';
import { propTypes } from '../../props';
import { Link } from 'react-router';


import { USERS_ROUTE } from '../../contants';


class Users extends React.Component {
  constructor (props) {
    super(props);

    this.handleSetUser =  this.handleSetUser.bind(this);
  }


  handleSetUser (e) {
    const memId = e.target.dataset.memid;

    this.props.selectUser(memId);
  }


  render () {
    const items = objectToArray(this.props.usersAll).map(item => {
      return <li key={item._id}>
        <Link
          data-memId={item._id}
          onClick={this.handleSetUser}
          to={`${USERS_ROUTE}/${item._id}`}
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
