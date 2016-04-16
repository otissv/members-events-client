/*
* Authorisation contaier
 */

'use strict';
import { connect } from 'react-redux';
import actions from '../../actions';

import { propTypes, mapStateToProps } from '../../helpers';
import Users from '../../components/users/list-users.jsx';


class UsersContainer extends React.Component{
  componentWillMount () {
    const {
      getUsers,
      setUsers,
      storage } = this.props;

    const { _id, token } = storage;

    getUsers(_id, token).payload
      .then(response => {
        setUsers(response.data.result);
      });
  }

  render () {
    return <Users {...this.props} />;
  }
}


UsersContainer.propTypes = propTypes;

export default connect(mapStateToProps, actions)(UsersContainer);
