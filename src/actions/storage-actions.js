/*
* Local storage actions
*/

'use strict';

import Promise from 'bluebird';
import cookie from 'cookiejs';

Promise.promisifyAll(cookie);

import {
  GET_STORAGE,
  SET_STORAGE,
  DELETE_STORAGE
} from '../contants';


export function setStorage (pairs) {
  return {
    type: SET_STORAGE,
    payload: cookie.set(pairs)
  };
}


export function getStorge (name) {
  return {
    type: GET_STORAGE,
    payload: cookie.get(name)
  };
}

export function removeStorge (name) {

  return {
    type: DELETE_STORAGE,
    payload: cookie.remove(name)
  };
}
