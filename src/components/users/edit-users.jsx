/*
* Authorisation sign in
 */
'use strict';

import AuthForm from './form-users.jsx';
import { propTypes } from '../../props';


export default class EditUser extends React.Component  {
  constructor (props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (data) {
    const {
      selectedUser,
      storage,
      redirectTo,
      updateUser
    } = this.props;

    const { _id, token } =  storage;

    updateUser(_id, token, selectedUser, data).payload
      .then(response => {
        redirectTo(`/users/${selectedUser}`);
      });
  }

  handleChange(e) {

  }


  render () {
    const { handleSubmit } = this.props;
    return <AuthForm
      onSubmit={handleSubmit(this.handleSubmit)}
      {...this.props}
      heading='Edit User'
      onChange={this.handleChange}
      />;
  }
}

// Vaidate proptypes
EditUser.propTypes = propTypes;
