/*
* Authorisation sign in
 */
'use strict';

import AuthForm from './form-auth.jsx';
import { propTypes } from '../../helpers';


export default class Signin extends React.Component  {
  onSubmit (props) {
    const { authenticate, setStorage, loggedIn } = this.props;
    authenticate(props).payload
      .then(reponse => {
        if (!reponse.data.success) {
          this.props.redirectTo('/signup');
        } else {
          this.props.redirectTo('/');

          setStorage(reponse.data.result);
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
