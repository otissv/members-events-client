/*
* Authorisation form component
 */


import { Link } from 'react-router';

import { ROOT_ROUTE } from '../../contants';
import FormInput from '../form-input-component.jsx';


const AuthForm = (props) => {
  const {
    fields: { username, password },
    heading,
    onSubmit
  } = props;

  return <form className="uk-form uk-form-stacked" onSubmit={onSubmit}>
    <h3>{heading}</h3>


    <FormInput
      field={username}
      label='Username'
      type='text'
    />

    <FormInput
      field={password}
      label='Password'
      type='password'
    />

    <button type='submit' className='btn btn-primary'>Sign in</button>

    <Link to={ROOT_ROUTE} className='btn btn-danger'>Cancel</Link>
  </form>;
};


AuthForm.propTypes = {
  fields        : React.PropTypes.object.isRequired,
  heading				: React.PropTypes.string,
  handleSubmit  : React.PropTypes.func.isRequired,
  onSubmit      : React.PropTypes.func.isRequired
};

export default AuthForm;
