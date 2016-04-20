'use strict';

import {
  REMOVE_FROM_LIST_EVENT,
  SELECT_EVENT,
  SET_EVENTS,
  SET_EVENT,
  UPDATE_EVENT
} from '../contants/';

const INITAL_STATE = {
  eventSelected: null,
  eventsAll    : {},
  event        : {}
};

export default function applicationReducer(state = INITAL_STATE, action) {
  switch (action.type) {
    case REMOVE_FROM_LIST_EVENT:
      return {...state, eventsAll: action.payload};

    case SET_EVENTS:
      return {...state, eventsAll: action.payload};

    case SELECT_EVENT:
      return {...state, eventSelected: action.payload};

    case SET_EVENT:
      return {...state, event: action.payload};

    case UPDATE_EVENT:
      return {...state, event: action.payload};

    default:
      return state;
  }
}
