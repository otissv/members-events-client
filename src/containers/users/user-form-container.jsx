/*
* User form container
*/


import { reduxForm } from 'redux-form';
import actions from 'actions';
import { mapStateToProps } from 'reducers';


export default function UserForm (ComposedClass, formName) {
 function validate (values) {
   const errors = {};


   if (!values.email) {
     errors.email = 'Enter a email address';
   }

   if (!values.firstName) {
     errors.firstName = 'Enter a first name';
   }

   if (!values.lastName) {
     errors.lastName = 'Enter last name';
   }

   if (!values.roles) {
     errors.roles = 'Enter a role';
   }

   if (!values.username) {
     errors.username = 'Enter a username';
   }

   return errors;
 }

 // connet: 1st argument is mapStateToProps, 2nd is mapDispatchToProps
 // reduxForm: 1st is form config, 2nd argument is mapStateToProps, 3rd is mapDispatchToProps
 return reduxForm(
   {
     form: formName,
     fields: [
       'address.address1',
       'address.address2',
       'address.city',
       'address.state',
       'address.postcode',
       'dateOfBirth',
       'email',
       'password',
       'firstName',
       'lastName',
       'roles',
       'username'
     ],
     validate
   },
   mapStateToProps,
   actions
 )(ComposedClass);
}
