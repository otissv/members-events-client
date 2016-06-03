/*
* Event form container
 */

import { reduxForm } from 'redux-form';
import actions from 'actions';
import { mapStateToProps } from 'reducers';


export default function UserForm (ComposedClass, formName) {
 function validate (values) {
   const errors = {};


   if (!values.title) {
     errors.title = 'Enter a title';
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
       'attended',
       'end',
       'category',
       'enrolled',
       'room',
       'title',
       'start'
     ],
     validate
   },
   mapStateToProps,
   actions
 )(ComposedClass);
}
