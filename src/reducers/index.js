/*
* Combined reducers
*/

'use strict';

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './user-reducer';
import applicationReducer from './application-reducer';
import eventReducer from './event-reducer';
import categoryReducer from './category-reducer';

export function mapStateToProps (state) {
  return {
		isLoggedIn        : state.application.isLoggedIn,
    storage           : state.application.storage,

		event             : state.events.event,
		eventsAll         : state.events.eventsAll,
    eventsCalendarDate: state.events.eventsCalendarDate,
		eventEditor       : state.events.eventEditor,
		eventSelected     : state.events.eventSelected,

    category          : state.categories.category,
		categoriesAll     : state.categories.categoriesAll,
    categoryColor     : state.categories.categoryColor,
    categoryColorsAll : state.categories.categoryColorsAll,
		categoryEditor    : state.categories.categoryEditor,
		categorySelected  : state.categories.categorySelected,

		user              : state.users.user,
		usersAll          : state.users.usersAll,
		selectedUser      : state.users.selectedUser
  };
}

const rootReducer = combineReducers({
  application : applicationReducer,
  form        : formReducer,
  events      : eventReducer,
  categories  : categoryReducer,
  users       : userReducer
});

export default rootReducer;
