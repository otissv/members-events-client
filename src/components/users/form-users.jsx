/*
* User form component
 */
'use strcit';


import { Link } from 'react-router';
import Address from '../shared/address-shared.jsx';
import Form from 'react-uikit-form';
import FormInput from 'react-uikit-form/lib/form-input';
import { USERS_ROUTE } from 'contants';
import TextEditor from '../shared/text-editor-component.jsx';


class UserForm extends React.Component {
  componentWillMount() {
    const { initializeForm, user } = this.props;
    initializeForm(user);
  }


  render () {
    const {
      fields: {
        ...address,
        dateOfBirth,
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


    return <Form layout='stacked' onSubmit={onSubmit}>
      <h3>{heading}</h3>

      <FormInput
        {...username}
        label='Username'
        type='text'
      />

      <FormInput
        {...email}
        label='Email'
        type='email'
      />

      <FormInput
        {...firstName}
        label='First Name'
        type='text'
      />

      <FormInput
        {...lastName}
        label='Last Name'
        type='text'
      />

      <FormInput
        {...dateOfBirth}
        label='Date of Birth'
        icon='calendar'
        type='date'
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
              {...roles} value='manager' checked={roles.value == 'manager'} onChange={onChange}
            />
            Manager
          </label>
          <label>
            <input type='radio'
              name='roles'
              className={`form-group ${roles.touched && roles.invalid ? 'uk-form-danger' : ''}`}
              {...roles} value='instructor' checked={roles.value == 'instructor'} onChange={onChange}
            />
            Instructor
          </label>
          <label>
            <input type='radio'
              name='roles'
              className={`form-group ${roles.touched && roles.invalid ? 'uk-form-danger' : ''}`}
              {...roles} value='receptionist' checked={roles.value == 'receptionist'} onChange={onChange}
            />
            Receptionist
          </label>
          <label>
            <input type='radio'
              name='roles'
              className={`form-group ${roles.touched && roles.invalid ? 'uk-form-danger' : ''}`}
              {...roles} value='client' checked={roles.value == 'client'} onChange={onChange}
            />
            Client
          </label>
        </div>

        <div className='uk-text-danger'>
        {roles.touched ? roles.error : ''}
        </div>
      </div>

      <span className='uk-form-label'>Comments</span>
      <div style={{border: '1px solid #ddd', marginBottom: '15px', borderRadius: '4px', minHeight: '30px'}}>
      <TextEditor {...this.props}/>
      </div>

      <button type='submit' className='btn btn-primary'>Send</button>

      <Link to={`${USERS_ROUTE}/${selectedUser}`} className='btn btn-danger'>Cancel</Link>
    </Form>;
  }
}


// Vaidate proptypes
UserForm.propTypes = {
  user         : React.PropTypes.object.isRequired,
  fields        : React.PropTypes.object.isRequired,
  heading       : React.PropTypes.string,
  initializeForm: React.PropTypes.func.isRequired,
  selectedUser : React.PropTypes.string,
  onChange      : React.PropTypes.func.isRequired,
  onSubmit      : React.PropTypes.func.isRequired
};

export default UserForm;
