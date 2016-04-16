/*
* Authorisation sign in
 */
'use strict';

import AuthForm from './form-users.jsx';
import { propTypes } from '../../props';


export default class EditUser extends React.Component  {
  onSubmit (props) {
    const { updateUser, setStorage, loggedIn } = this.props;
  
      console.log(props);
  }


  render () {
    const { handleSubmit } = this.props;
    return <AuthForm
      onSubmit={handleSubmit(this.onSubmit.bind(this))}
      {...this.props}
      heading='Edit User'
      />;
  }
}

// Vaidate proptypes
EditUser.propTypes = propTypes;
