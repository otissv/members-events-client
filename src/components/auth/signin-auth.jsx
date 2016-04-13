'use strict';

import { reduxForm } from 'redux-form';
import { browserHistory, Link } from 'react-router';
import actions from '../../actions';


class Signin extends React.Component  {
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
    const { fields: { username, password }, handleSubmit } = this.props;
    return <form className="uk-form uk-form-stacked" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
      <h3>Sign In</h3>
      <div className="uk-form-row">
        <label className="uk-form-label" >Username</label>
        <div className="uk-form-controls">
          <input type='text'
            className={`form-group ${username.touched && username.invalid ? 'uk-form-danger' : ''}`}
            {...username}
          />
        </div>

        <div className='text-help'>
        {username.touched ? username.error : ''}
        </div>
      </div>

      <div className="uk-form-row">
        <label className="uk-form-label" >password</label>
        <div className="uk-form-controls">
          <input type='password'
            className={`form-group ${password.touched && password.invalid ? 'uk-form-danger' : ''}`}
            {...password}
          />
        </div>

        <div className='text-help'>
        {password.touched ? password.error : ''}
        </div>
      </div>

      <button type='submit' className='btn btn-primary'>Sign in</button>

      <Link to='/' className='btn btn-danger'>Cancel</Link>
    </form>;
  }
}


// Vaidate proptypes
Signin.propTypes = {
  fields: React.PropTypes.object,
  loggedIn: React.PropTypes.bool,
  handleSubmit: React.PropTypes.func,
  register: React.PropTypes.func,
  setStorage: React.PropTypes.func
};


function validate (values) {
  const errors = {};

  if (!values.username) {
    errors.username = 'Enter a username';
  }

  if (!values.password) {
    errors.password = 'Enter a password';
  }

  return errors;
}

// connet: 1st argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd argument is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm(
  {
    form: 'SigninForm',
    fields: [ 'username', 'password' ],
    validate
  },
  null,
  {
    register : actions.register,
    setStorage: actions.setStorage
  }
)(Signin);
