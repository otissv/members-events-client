/*
* Authorisation sign up
 */

'use strict';

import { propTypes } from '../../helpers';
import AuthForm from './form-auth.jsx';


export default class Signup extends React.Component  {

  onSubmit (props) {
    const { register, setStorage, loggedIn } = this.props;

    register(props).payload
      .then(responce => responce)
      .then(responce => {
        if (!responce.data.success) {
          this.props.redirectTo('/signup');
        } else {
          // redirect to home
          this.props.redirectTo('/');

          setStorage(responce.data.result);
          loggedIn(true);
        }
      });
  }


  render () {
    const { handleSubmit } = this.props;

    return <AuthForm onSubmit={handleSubmit(this.onSubmit.bind(this))} {...this.props}/>;
  }
}

// Vaidate proptypes
Signup.propTypes = propTypes;
