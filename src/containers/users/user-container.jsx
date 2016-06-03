/*
* User container
 */

'use strict';
import { connect } from 'react-redux';
import actions from 'actions';
import { mapStateToProps } from 'reducers';
import Users from 'components/users/view-users.jsx';


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

UserContainer.propTypes = {
  getUser     : React.PropTypes.func.isRequired,
  selectedUser: React.PropTypes.string.isRequired,
  setUser     : React.PropTypes.func.isRequired,
  storage     : React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, actions)(UserContainer);
