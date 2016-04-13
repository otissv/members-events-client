'use strict';

import { browserHistory } from 'react-router';
import auth from '../../containers/auth-container.jsx';

import AuthForm from './form-auth.jsx';


class Signup extends React.Component  {

  onSubmit (props) {
    const { register, setStorage, loggedIn } = this.props;

    register(props).payload
      .then(responce => responce)
      .then(responce => {
        // redirect to home
        browserHistory.push('/');

        const { _id, token } = responce.data.result;
        setStorage({ _id, token });
        loggedIn(true);
      });
  }


  render () {
    const { handleSubmit } = this.props;

    return <AuthForm onSubmit={handleSubmit(this.onSubmit.bind(this))} {...this.props}/>;
  }
}

// Vaidate proptypes
Signup.propTypes = {
  fields: React.PropTypes.object,
  loggedIn: React.PropTypes.func,
  handleSubmit: React.PropTypes.func,
  register: React.PropTypes.func,
  setStorage: React.PropTypes.func
};


export default auth(Signup, 'SignupForm');
