/*
* Aplication reducer
*/

'use strict';

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './user-reducer';
import applicationReducer from './application-reducer';


const rootReducer = combineReducers({
  application  :applicationReducer,
  users : userReducer,
  form  : formReducer
});

export default rootReducer;
