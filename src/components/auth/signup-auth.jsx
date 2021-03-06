/*
* Authorisation sign up component
 */


import AuthForm from './form-auth.jsx';


export default class Signup extends React.Component  {

  onSubmit (props) {
    const { register, setStorage, loggedIn } = this.props;

    register(props).payload
      .then(response => {
        if (!response.data.success) {
          this.props.redirectTo('/signup');
        } else {
          // redirect to home
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
      heading='Sing up'
      />;
  }
}


Signup.propTypes = {
  loggedIn      : React.PropTypes.func.isRequired,
  handleSubmit  : React.PropTypes.func.isRequired,
  register      : React.PropTypes.func.isRequired,
  redirectTo    : React.PropTypes.func.isRequired,
  setStorage    : React.PropTypes.func.isRequired
};
