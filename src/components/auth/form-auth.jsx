/*
* Authorisation form
 */
'use strcit';

import { Link } from 'react-router';
import { propTypes } from '../../helpers';


const AuthForm = (props) => {
  const {
    fields: { username, password },
    onSubmit
  } = props;

  return <form className="uk-form uk-form-stacked" onSubmit={onSubmit}>
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
};


// Vaidate proptypes
AuthForm.propTypes = propTypes;

export default AuthForm;
