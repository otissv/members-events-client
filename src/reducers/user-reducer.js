'use strict';

import {
  SELECT_USER,
  SET_USERS,
  SET_USER
} from '../contants/';

const INITAL_STATE = {
  selectedUser: null,
  usersAll: {},
  user: {}
};

export default function applicationReducer(state = INITAL_STATE, action) {
  switch (action.type) {
    case SET_USERS:
      return {...state, usersAll: action.payload};

    case SELECT_USER:
      return {...state, selectedUser: action.payload};

    case SET_USER:
      return {...state, user: action.payload};

    default:
      return state;
  }
}
