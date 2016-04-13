/*
* Authorisation actions
 */
'use strict';

import axios from 'axios';
import Promise from 'bluebird';
import cookie from 'cookiejs';

import {
  SET_STORAGE,
  LOGGEDIN,
  API_URL,
  REGISTER,
  GET_STORAGE,
  DELETE_STORAGE
} from '../contants';


Promise.promisifyAll(cookie);


export function loggedIn (bool) {
  
  return {
    type: LOGGEDIN,
    payload: bool
  };
}


export function setStorage (pairs) {
  cookie.set(pairs);

  return {
    type: SET_STORAGE,
    payload: pairs
  };
}


export function getStorge (storagekeys) {

  const reducer = (result, item) => {
     result[item] = cookie.get(item);
     return result;
  };

  return {
    type: GET_STORAGE,
    payload: storagekeys.reduce(reducer, {})
  };
}

export function removeStorge (name) {

  return {
    type: DELETE_STORAGE,
    payload: cookie.remove(name)
  };
}

export function register (props) {
  const request = axios.post(`${API_URL}register`, props);

  return {
    type: REGISTER,
    payload: request
  };
}
