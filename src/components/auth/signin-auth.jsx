'use strict';

import { browserHistory } from 'react-router';
import auth from '../../containers/auth-container.jsx';
import AuthForm from './form-auth.jsx';

class Signin extends React.Component  {
  onSubmit (props) {
    const { authenticate, setStorage, loggedIn } = this.props;
    authenticate(props).payload
      .then(responce => responce)
      .then(responce => {
        if (!responce.data.success) {
          browserHistory.push('/signup');
        } else {
          // redirect to home
          browserHistory.push('/');
          const { _id, token } = responce.data;
          setStorage({ _id, token });
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
Signin.propTypes = {
  fields: React.PropTypes.object,
  loggedIn: React.PropTypes.func,
  handleSubmit: React.PropTypes.func,
  authenticate: React.PropTypes.func,
  setStorage: React.PropTypes.func
};


export default auth(Signin, 'SigninForm');
