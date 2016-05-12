/*
* Event form container
 */

import { reduxForm } from 'redux-form';
import actions from '../../actions';
import { mapStateToProps } from '../../reducers';


export default function CourseForm (ComposedClass, formName) {
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
       'color',
       'status',
       'students',
       'title'
     ],
     validate
   },
   mapStateToProps,
   actions
 )(ComposedClass);
}
