/*
* Authorisation sign in component
 */


import AuthForm from './form-auth.jsx';


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


Signin.propTypes ={
  authenticate  : React.PropTypes.func.isRequired,
  setStorage    : React.PropTypes.func.isRequired,
  loggedIn      : React.PropTypes.func.isRequired,
  redirectTo    : React.PropTypes.func.isRequired,
  handleSubmit  : React.PropTypes.func.isRequired
};
