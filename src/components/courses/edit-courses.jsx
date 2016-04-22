/*
* Edit Course component
 */


import AuthForm from './form-courses.jsx';


import { COURSES_ROUTE } from '../../contants';


export default class EditUser extends React.Component  {
  constructor (props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (data) {
    const {
      courseSelected,
      storage,
      redirectTo,
      updateCourse
    } = this.props;

    const { _id, token } =  storage;

    updateCourse(_id, token, courseSelected, data).payload
      .then(response => {
        redirectTo(`${COURSES_ROUTE}/${courseSelected}`);
      });
  }

  handleChange(e) {

  }


  render () {
    const { handleSubmit } = this.props;
    return <AuthForm
      onSubmit={handleSubmit(this.handleSubmit)}
      {...this.props}
      heading='Edit Course'
      onChange={this.handleChange}
      />;
  }
}


EditUser.propTypes = {
  courseSelected: React.PropTypes.string.isRequired,
  redirectTo   : React.PropTypes.func.isRequired,
  storage      : React.PropTypes.object.isRequired,
  updateCourse  : React.PropTypes.func.isRequired,
  handleSubmit : React.PropTypes.func.isRequired
};
