/*
* Aplication reducer
*/

'use strict';

import { combineReducers } from 'redux';
import UserReducer from './user-reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: UserReducer,
  form: formReducer
});

export default rootReducer;
