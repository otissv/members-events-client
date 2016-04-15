/*
* Authorisation sign in
 */
'use strict';

import auth from '../../containers/auth-container.jsx';
import AuthForm from './form-auth.jsx';
import { propTypes } from '../../helpers';


class Signin extends React.Component  {
  onSubmit (props) {
    const { authenticate, setStorage, loggedIn } = this.props;
    authenticate(props).payload
      .then(responce => responce)
      .then(responce => {
        if (!responce.data.success) {
          this.props.redirectTo('/signup');
        } else {
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
Signin.propTypes = propTypes;


export default auth(Signin, 'SigninForm');
