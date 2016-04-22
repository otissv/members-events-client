/*
* List courses container
 */


import { connect } from 'react-redux';
import actions from '../../actions';
import { mapStateToProps } from '../../reducers';
import Courses from '../../components/courses/list-courses.jsx';


class CoursesContainer extends React.Component{
  componentWillMount () {
    const {
      getCourses,
      setCourses,
      storage } = this.props;

    const { _id, token } = storage;

    getCourses(_id, token).payload
      .then(response => {
        setCourses(response.data.result);
      });
  }

  render () {
    return <Courses {...this.props} />;
  }
}


CoursesContainer.propTypes = {
  getCourses: React.PropTypes.func.isRequired,
  setCourses: React.PropTypes.func.isRequired,
  storage  : React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, actions)(CoursesContainer);
