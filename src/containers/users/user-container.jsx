/*
* Authorisation contaier
 */

'use strict';
import { connect } from 'react-redux';
import actions from '../../actions';

import { propTypes, mapStateToProps } from '../../props';
import Users from '../../components/users/user-users.jsx';


class UserContainer extends React.Component{
  componentWillMount () {
    const {
      getUser,
      selectedUser,
      setUser,
      storage } = this.props;

    const { _id, token } = storage;

    getUser(_id, token, selectedUser).payload
      .then(response => {
        setUser(response.data.result);
      });
  }

  render () {
    return <Users {...this.props}/>;
  }
}

UserContainer.propTypes = propTypes;

export default connect(mapStateToProps, actions)(UserContainer);
