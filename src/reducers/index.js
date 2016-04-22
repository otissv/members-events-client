/*
* Combined reducers
*/

'use strict';

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './user-reducer';
import applicationReducer from './application-reducer';
import eventReducer from './event-reducer';
import courseReducer from './course-reducer';

export function mapStateToProps (state) {
  return {
		isLoggedIn   : state.application.isLoggedIn,
    storage      : state.application.storage,

		event        : state.events.event,
		eventsAll    : state.events.eventsAll,
		eventEditor  : state.events.eventEditor,
		eventSelected: state.events.eventSelected,

    course        : state.courses.course,
		coursesAll    : state.courses.coursesAll,
		courseEditor  : state.courses.courseEditor,
		courseSelected: state.courses.courseSelected,

		user         : state.users.user,
		usersAll     : state.users.usersAll,
		selectedUser : state.users.selectedUser
  };
}

const rootReducer = combineReducers({
  application : applicationReducer,
  form        : formReducer,
  events      : eventReducer,
  courses     : courseReducer,
  users       : userReducer
});

export default rootReducer;
