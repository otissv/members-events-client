/*
* Authorisation sign in component
 */


import AuthForm from './form-auth.jsx';
import { propTypes } from '../../props';


export default class Signin extends React.Component  {
  onSubmit (props) {
    const { authenticate, setStorage, loggedIn } = this.props;
    authenticate(props).payload
      .then(response => {
        if (!response.data.success) {
          this.props.redirectTo('/signup');
        } else {
          this.props.redirectTo('/');

          setStorage(response.data.result);
          loggedIn(true);
        }
      });
  }


  render () {
    const { handleSubmit } = this.props;
    return <AuthForm
      onSubmit={handleSubmit(this.onSubmit.bind(this))}
      {...this.props}
      heading='Sing in'
      />;
  }
}

// Vaidate proptypes
Signin.propTypes = propTypes;
