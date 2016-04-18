/*
* Authorisation form
 */
'use strcit';

import { Link } from 'react-router';
import { propTypes } from '../../props';
import Address from '../shared/address-shared.jsx';


class UserForm extends React.Component {
  componentWillMount() {
    const { initializeForm, user } = this.props;
    initializeForm(user);
  }


  render () {
    const {
      fields: {
        ...address,
        email,
        password,
        firstName,
        lastName,
        roles,
        username
      },
      heading,
      selectedUser,
      onChange,
      onSubmit
    } = this.props;


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

        <div className='uk-text-danger'>
        {username.touched ? username.error : ''}
        </div>
      </div>


      <div className="uk-form-row">
        <label className="uk-form-label" >Email</label>
        <div className="uk-form-controls">
          <input type='email'
            className={`form-group ${email.touched && email.invalid ? 'uk-form-danger' : ''}`}
            {...email}
          />
        </div>

        <div className='uk-text-danger'>
        {email.touched ? email.error : ''}
        </div>
      </div>

      <div className="uk-form-row">
        <label className="uk-form-label" >First Name</label>
        <div className="uk-form-controls">
          <input type='text'
            className={`form-group ${firstName.touched && firstName.invalid ? 'uk-form-danger' : ''}`}
            {...firstName}
          />
        </div>

        <div className='uk-text-danger'>
        {firstName.touched ? firstName.error : ''}
        </div>
      </div>

      <div className="uk-form-row">
        <label className="uk-form-label" >Last Name</label>
        <div className="uk-form-controls">
          <input type='text'
            className={`form-group ${lastName.touched && lastName.invalid ? 'uk-form-danger' : ''}`}
            {...lastName}
          />
        </div>

        <div className='uk-text-danger'>
        {lastName.touched ? lastName.error : ''}
        </div>
      </div>

      <Address {...address} />

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

        <div className='uk-text-danger'>
        {roles.touched ? roles.error : ''}
        </div>
      </div>

      <button type='submit' className='btn btn-primary'>Send</button>

      <Link to={`/users/${selectedUser}`} className='btn btn-danger'>Cancel</Link>
    </form>;
  }
}


// Vaidate proptypes
UserForm.propTypes = propTypes;

export default UserForm;
