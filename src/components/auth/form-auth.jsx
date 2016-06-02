/*
* Authorisation form component
 */

import Form from 'react-uikit-form';
import FormInput from 'react-uikit-form/lib/form-input';
import Button from 'react-uikit-button';
import { Link } from 'react-router';
import { ROOT_ROUTE } from '../../contants';

function help (type, text, context) {
  return { type, text, context };
}
const AuthForm = (props) => {
  const {
    fields: { username, password },
    heading,
    onSubmit
  } = props;

  return <Form
    title={heading}
    layout='stacked'
    onSubmit={onSubmit}
    items={[
      {
        ...username,
        kitid: 'username',
        label: 'Username',
        context: username.invalid && username.touched ? 'danger' :  null,
        help:  username.invalid && username.touched ? help('block', username.error, 'danger') :  null
      },
      {

        ...password,
        kitid: 'label',
        label: 'password',
        context: password.invalid && username.touched ? 'danger' :  null,
        help:  password.invalid && password.touched ? help('block', password.error, 'danger') :  null
      }
    ]}
  >
    <Button type='submit' context='primary' margin='right top'>
      Sign in
    </Button>
  </Form>;
};


AuthForm.propTypes = {
  fields        : React.PropTypes.object.isRequired,
  heading				: React.PropTypes.string,
  handleSubmit  : React.PropTypes.func.isRequired,
  onSubmit      : React.PropTypes.func.isRequired
};

export default AuthForm;
