/*
* Course container
 */


import { connect } from 'react-redux';
import actions from '../../actions';
import { mapStateToProps } from '../../reducers';
import Courses from '../../components/courses/view-courses.jsx';


class CourseContainer extends React.Component{
  componentWillMount () {
    const {
      getCourse,
      courseSelected,
      setCourse,
      storage
    } = this.props;

    const { _id, token } = storage;

    getCourse(_id, token, courseSelected).payload
      .then(response => {
        setCourse(response.data.result);
      });
  }

  render () {
    return <Courses {...this.props}/>;
  }
}

CourseContainer.propTypes = {
  getCourse     : React.PropTypes.func.isRequired,
  courseSelected: React.PropTypes.string.isRequired,
  setCourse     : React.PropTypes.func.isRequired,
  storage       : React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, actions)(CourseContainer);
