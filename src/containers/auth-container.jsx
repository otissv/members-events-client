'use strict';

import { reduxForm } from 'redux-form';
import actions from '../actions';

export default function Sign (ComposedClass, formName) {


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
  return reduxForm(
    {
      form: formName,
      fields: [ 'username', 'password' ],
      validate
    },
    null,
    {
      authenticate : actions.authenticate,
      loggedIn: actions.loggedIn,
      register : actions.register,
      setStorage: actions.setStorage
    }
  )(ComposedClass);
}