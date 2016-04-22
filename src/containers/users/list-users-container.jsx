/*
* LIst Usuers contaier
 */


import { connect } from 'react-redux';
import actions from '../../actions';
import { mapStateToProps } from '../../reducers';
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


UsersContainer.propTypes = {
  getUsers: React.PropTypes.func.isRequired,
  setUsers: React.PropTypes.func.isRequired,
  storage : React.PropTypes.func.isRequired
};

export default connect(mapStateToProps, actions)(UsersContainer);
