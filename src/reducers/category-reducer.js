/*
* Event reducer
*/

import { EditorState } from 'draft-js';

import {
  REMOVE_CATEGORY_FROM_LIST,
  SELECT_CATEGORY,
  SET_CATEGORIES,
  SET_CATEGORY,
  SET_COLORS,
  SET_COLOR,
  UPDATE_CATEGORY
} from 'contants';

const INITAL_STATE = {
  categoryColor    : '',
  categoryColorsAll: {},
  categorySelected : null,
  categoriesAll    : {},
  categoryEditor   : EditorState.createEmpty(),
  category         : {}
};

export default function applicationReducer(state = INITAL_STATE, action) {
  switch (action.type) {
    case REMOVE_CATEGORY_FROM_LIST:
      return {...state, categoriesAll: action.payload};

    case SET_CATEGORIES:
      return {...state, categoriesAll: action.payload};

    case SELECT_CATEGORY:
      return {...state, categorySelected: action.payload};

    case SET_CATEGORY:
      return {...state, category: action.payload};

    case SET_COLOR:
      return {...state, categoryColor: action.payload};

    case SET_COLORS:
      return {...state, categoryColorsAll: action.payload};

    case UPDATE_CATEGORY:
      return {...state, category: action.payload};

    default:
      return state;
  }
}
