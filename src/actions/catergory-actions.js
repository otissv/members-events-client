/*
* Category Action
*/


'use strict';
import axios from 'axios';

import {
  arrayToObject,
  deleteKeyToArray,
  query
} from 'helpers';

import {
  API_URL,
  REMOVE_CATEGORY,
  REMOVE_CATEGORY_FROM_LIST,
  GET_CATEGORY,
  GET_CATEGORIES,
  GET_COLORS,
  SELECT_CATEGORY,
  SET_CATEGORY,
  SET_CATEGORIES,
  SET_COLOR,
  SET_COLORS,
  UPDATE_CATEGORY
} from '../contants';


export function createCategory (_id, token, data) {
  const request = axios.post(`${API_URL}categories/${query(_id, token)}`, data);

  return {
    type: UPDATE_CATEGORY,
    payload: request
  };
}


export function removeCategory (_id, token, category) {
  const request = axios.delete(`${API_URL}categories/${category}/${query(_id, token)}`);

  return {
    type: REMOVE_CATEGORY,
    payload: request
  };
}


export function getCategories (_id, token) {
  const request = axios.get(`${API_URL}categories/${query(_id, token)}`);

  return {
    type: GET_CATEGORIES,
    payload: request
  };
}


export function getCategoryColors (_id, token) {
  const request = axios.get(`${API_URL}categories/colors/${query(_id, token)}`);

  return {
    type: GET_COLORS,
    payload: request
  };
}

export function setCategories (categories) {
  const categoriesList = arrayToObject(categories);

  return {
    type: SET_CATEGORIES,
    payload: categoriesList('_id', 'category_')
  };
}


export function setCategoryColor (color) {
  return {
    type: SET_COLOR,
    payload: color
  };
}


export function setCategoryColors (colors) {
  return {
    type: SET_COLORS,
    payload: colors
  };
}


export function getCategory (_id, token, category) {
  const request = axios.get(`${API_URL}categories/${category}/${query(_id, token)}`);

  return {
    type: GET_CATEGORY,
    payload: request
  };
}


export function removeCategoryFromList (list, keyName) {
  const categoryList = arrayToObject(deleteKeyToArray(list, keyName));

  return {
    type: REMOVE_CATEGORY_FROM_LIST,
    payload: categoryList('_id', 'category_')
  };
}


export function selectCategory (categoryId) {
  return {
    type: SELECT_CATEGORY,
    payload: categoryId
  };
}


export function setCategory (category) {
  return {
    type: SET_CATEGORY,
    payload: category
  };
}


export function updateCategory (_id, token, category, data) {
  const request = axios.put(`${API_URL}categories/${category}/${query(_id, token)}`, data);

  return {
    type: UPDATE_CATEGORY,
    payload: request
  };
}
