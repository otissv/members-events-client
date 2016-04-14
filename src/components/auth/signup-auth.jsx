/*
* Authorisation sign up
 */

'use strict';

import { browserHistory } from 'react-router';
import auth from '../../containers/auth-container.jsx';
import { propTypes } from '../../helpers';


import AuthForm from './form-auth.jsx';


class Signup extends React.Component  {

  onSubmit (props) {
    const { register, setStorage, loggedIn } = this.props;

    register(props).payload
      .then(responce => responce)
      .then(responce => {
        if (!responce.data.success) {
          browserHistory.push('/signup');
        } else {
          // redirect to home
          browserHistory.push('/');
          
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


export default auth(Signup, 'SignupForm');
