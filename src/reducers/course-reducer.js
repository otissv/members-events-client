/*
* Event reducer
*/

import { EditorState } from 'draft-js';

import {
  REMOVE_COURSE_FROM_LIST,
  SELECT_COURSE,
  SET_COURSES,
  SET_COURSE,
  UPDATE_COURSE
} from '../contants/';

const INITAL_STATE = {
  courseSelected: null,
  coursesAll    : {},
  courseEditor  : EditorState.createEmpty(),
  course        : {}
};

export default function applicationReducer(state = INITAL_STATE, action) {
  switch (action.type) {
    case REMOVE_COURSE_FROM_LIST:
      return {...state, coursesAll: action.payload};

    case SET_COURSES:
      return {...state, coursesAll: action.payload};

    case SELECT_COURSE:
      return {...state, courseSelected: action.payload};

    case SET_COURSE:
      return {...state, course: action.payload};

    case UPDATE_COURSE:
      return {...state, course: action.payload};

    default:
      return state;
  }
}
