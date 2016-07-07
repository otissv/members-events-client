/*
* Event reducer
*/

import { EditorState } from 'draft-js';

import {
  EVENTS_CALENDAR_DATE,
  REMOVE_EVENT_FROM_LIST,
  SELECT_EVENT,
  SET_EVENTS,
  SET_EVENT,
  SET_EVENT_EDITOR,
  SET_EVENT_SLOT,
  UPDATE_EVENT
} from 'contants';


const INITAL_STATE = {
  event        : {},
  eventsCalendarDate: new Date(),
  eventsAll    : {},
  eventEditor  : EditorState.createEmpty(),
  eventSelected: null,
  eventSlot    : {}
};


// new Date(2015, 3, 1)
export default function applicationReducer(state = INITAL_STATE, action) {
  switch (action.type) {

    case EVENTS_CALENDAR_DATE:
      return {...state, eventsCalendarDate: action.payload};

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

      case SET_EVENT_SLOT:
        return {...state, eventSlot: action.payload};

    case UPDATE_EVENT:
      return {...state, event: action.payload};

    default:
      return state;
  }
}
