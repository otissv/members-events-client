/*
* Aplication reducer
*/

'use strict';

import { combineReducers } from 'redux';
import userReducer from './user-reducer';
import authReducer from './auth-reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  auth  :authReducer,
  users : userReducer,
  form  : formReducer
});

export default rootReducer;
