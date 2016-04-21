/*
* User form component
 */
'use strcit';

import { Link } from 'react-router';
import { propTypes } from '../../props';
import Address from '../shared/address-shared.jsx';
import FormInput from '../form-input-component.jsx';
import { USERS_ROUTE } from '../../contants';

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

      <FormInput
        field={username}
        label='Username'
        type='text'
      />

      <FormInput
        field={email}
        label='Email'
        type='email'
      />

      <FormInput
        field={firstName}
        label='First Name'
        type='text'
      />

      <FormInput
        field={lastName}
        label='Last Name'
        type='text'
      />


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

      <Link to={`${USERS_ROUTE}/${selectedUser}`} className='btn btn-danger'>Cancel</Link>
    </form>;
  }
}


// Vaidate proptypes
UserForm.propTypes = propTypes;

export default UserForm;
