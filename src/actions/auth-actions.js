
/*
* Authorisation actions
 */
'use strict';

import axios from 'axios';
import Promise from 'bluebird';
import cookie from 'cookie_js';

import {
  API_URL,
  AUTHENTICATE,
  GET_STORAGE,
  LOGGEDIN,
  DELETE_STORAGE,
  REGISTER,
  SET_STORAGE,
  UNAUTHENTICATE
} from '../contants';


Promise.promisifyAll(cookie);


export function authenticate (user) {
  const request = axios.post(`${API_URL}authenticate`, user);

  return {
    type: AUTHENTICATE,
    payload: request
  };
}


export function deleteStorage () {
  return {
    type: DELETE_STORAGE,
    payload: cookie.empty()
  };
}


export function getStorage () {
  return {
    type: GET_STORAGE,
    payload: cookie.all()
  };
}


export function loggedIn (bool) {
  return {
    type: LOGGEDIN,
    payload: bool
  };
}


export function register (user) {
  const request = axios.post(`${API_URL}register`, user);

  return {
    type: REGISTER,
    payload: request
  };
}


export function setStorage (storage) {
	cookie.set(storage)

  return {
    type: SET_STORAGE,
    payload: storage
  };
}


export function unauthenticate (user) {
  const request = axios.post(`${API_URL}unauthenticate/${user}`);

  return {
    type: UNAUTHENTICATE,
    payload: request
  };
}
