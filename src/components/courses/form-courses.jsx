/*
* Course form component
 */


import { Link } from 'react-router';
import Address from '../shared/address-shared.jsx';
import { EVENTS_ROUTE } from '../../contants';
import FormInput from '../form-input-component.jsx';

class CourseForm extends React.Component {
  componentWillMount() {
    const { initializeForm, course } = this.props;
    initializeForm(course);
  }


  render () {
    const {
      fields: {
        status,
        students,
        title
      },
      heading,
      selectedCourse,
      onChange,
      onSubmit
    } = this.props;


    return <form className="uk-form uk-form-stacked" onSubmit={onSubmit}>
      <h3>{heading}</h3>

      <FormInput
        field={title}
        label='Course title'
        type='text'
      />

      <FormInput
        field={students}
        label='Students'
        type='text'
      />

      <FormInput
        field={status}
        label='Status'
        type='text'
      />

      <button type='submit' className='btn btn-primary'>Save</button>

      <Link to={`${EVENTS_ROUTE}/${selectedCourse}`} className='btn btn-danger'>Cancel</Link>
    </form>;
  }
}

CourseForm.propTypes = {
  course         : React.PropTypes.object.isRequired,
  fields        : React.PropTypes.object.isRequired,
  heading       : React.PropTypes.string,
  initializeForm: React.PropTypes.func.isRequired,
  selectedCourse : React.PropTypes.string,
  onChange      : React.PropTypes.func.isRequired,
  onSubmit      : React.PropTypes.func.isRequired
};

export default CourseForm;
