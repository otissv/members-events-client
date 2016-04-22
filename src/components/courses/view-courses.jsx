/*
* View course component
*/

import {
  EVENTS_ROUTE,
  EVENT_EDIT_ROUTE
} from '../../contants';

import { Link } from 'react-router';
import deleteCourse from './delete-courses';

class Course extends React.Component {
  constructor (props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    deleteCourse(this.props);
  }

  render () {
    const { course, courseSelected } = this.props;

    return <div>
      <h1>Course Profile</h1>
      Title    : {course.title}<br />
      Students: {course.students}<br />
      Satuts  : {course.satuts}<br />

      <Link to={EVENTS_ROUTE} >Back</Link>
      <Link to={`${EVENT_EDIT_ROUTE}/${courseSelected}`} >Edit</Link>
      <a href='#' onClick={this.handleDelete}>Detele</a>
    </div>;
  }

}

export default Course;


Course.propTypes = {
  course        : React.PropTypes.object.isRequired,
  courseSelected: React.PropTypes.string.isRequired
};
