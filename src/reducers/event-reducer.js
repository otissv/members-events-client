/*
* Event reducer
*/

import { EditorState } from 'draft-js';

import {
  REMOVE_EVENT_FROM_LIST,
  SELECT_EVENT,
  SET_EVENTS,
  SET_EVENT,
  SET_EVENT_EDITOR,
  UPDATE_EVENT
} from '../contants/';

const INITAL_STATE = {
  eventSelected: null,
  eventsAll    : {},
  eventEditor  : EditorState.createEmpty(),
  event        : {}
};

export default function applicationReducer(state = INITAL_STATE, action) {
  switch (action.type) {
    case REMOVE_EVENT_FROM_LIST:
      return {...state, eventsAll: action.payload};

    case SET_EVENTS:
      return {...state, eventsAll: action.payload};

    case SELECT_EVENT:
      return {...state, eventSelected: action.payload};

    case SET_EVENT:
      return {...state, event: action.payload};

    case SET_EVENT_EDITOR:
      return {...state, eventEditor: action.payload};

    case UPDATE_EVENT:
      return {...state, event: action.payload};

    default:
      return state;
  }
}
