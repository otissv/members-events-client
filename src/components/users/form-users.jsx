/*
* Authorisation form
 */
'use strcit';

import { Link } from 'react-router';
import { propTypes } from '../../props';


class UserForm extends React.Component {
  componentWillMount() {
    const { initializeForm, user } = this.props;
    initializeForm(user);
  }


  render () {
    const {
      fields: { username, password, roles },
      heading,
      selectedUser,
      onChange,
      onSubmit
    } = this.props;

    // console.log(roles);
    return <form className="uk-form uk-form-stacked" onSubmit={onSubmit}>
      <h3>{heading}</h3>
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


      <div className="uk-form-row">
        Roles
        <div className="uk-form-controls">
          <label>
            <input type='radio'
              name='roles'
              className={`form-group ${roles.touched && roles.invalid ? 'uk-form-danger' : ''}`}
              {...roles } value='admin' checked={roles.value == 'admin'} onChange={onChange}
            />
            Admin
          </label>
          <label>
            <input type='radio'
              name='roles'
              className={`form-group ${roles.touched && roles.invalid ? 'uk-form-danger' : ''}`}
              {...roles} value='user' checked={roles.value == 'user'} onChange={onChange}
            />
            User
          </label>
        </div>

        <div className='text-help'>
        {roles.touched ? roles.error : ''}
        </div>
      </div>

      <button type='submit' className='btn btn-primary'>Sign in</button>

      <Link to={`/users/${selectedUser}`} className='btn btn-danger'>Cancel</Link>
    </form>;
  }
}


// Vaidate proptypes
UserForm.propTypes = propTypes;

export default UserForm;