/*
* Aplication reducer
*/

'use strict';

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './user-reducer';
import applicationReducer from './application-reducer';
import eventReducer from './event-reducer.js';

const rootReducer = combineReducers({
  application : applicationReducer,
  form        : formReducer,
  events       : eventReducer,
  users       : userReducer
});

export default rootReducer;
