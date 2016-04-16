'use strict';

import noMutate from 'no-mutate';


import {
  SET_USERS,
  SET_USER
} from '../contants/';

const INITAL_STATE = {
  usersAll: [],
  user: null
};

export default function applicationReducer(state = INITAL_STATE, action) {
  const { push } = noMutate;

  switch (action.type) {
    case SET_USERS:
      return {...state, usersAll: push(state.usersAll)(action.payload)};

    case SET_USER:
      return {...state, user: action.payload};

    default:
      return state;
  }
}
