/*
* Delete event component
*/

import { EVENTS_ROUTE } from '../../contants';

export default function deleteCourse(props) {
  const {
    removeCourseFromList,
    removeCourse,
    selectCourse,
    eventSelected,
    setCourse,
    storage,
    redirectTo,
    eventsAll
  } = props;

  const { _id, token } = storage;

  removeCourse(_id, token, eventSelected).payload
    .then(response => {
      if(!response.data.success) {
        console.log(response.data.message);
      }

      removeCourseFromList(eventsAll, eventSelected);
      setCourse({});
      selectCourse(null);
      redirectTo(EVENTS_ROUTE);
    });
}
