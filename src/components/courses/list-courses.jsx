/*
* List courses component
*/


import { objectToArray } from '../../helpers';
import { Link } from 'react-router';

import { COURSES_ROUTE } from '../../contants';


export default class Courses extends React.Component {
  constructor (props) {
    super(props);

    this.handleSetCourse =  this.handleSetCourse.bind(this);
  }


  handleSetCourse (e) {
    const memId = e.target.dataset.memid;

    this.props.selectCourse(memId);
  }


  render () {
    const items = objectToArray(this.props.coursesAll).map(item => {
      return <li key={item._id}>
        <Link
          data-memId={item._id}
          onClick={this.handleSetCourse}
          to={`${COURSES_ROUTE}/${item._id}`}
        >
          {item.title}
        </Link>
      </li>;
    });


    return <div>
      <h1>Courses</h1>
      <ul>{items}</ul>
    </div>;
  }
}


Courses.propTypes = {
  coursesAll: React.PropTypes.object,
  selectCourse: React.PropTypes.func.isRequired
};
