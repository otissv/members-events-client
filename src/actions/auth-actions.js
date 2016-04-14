
/*
* Authorisation actions
 */
'use strict';

import axios from 'axios';


import {
  API_URL,
  AUTHENTICATE,
  REGISTER,
  UNAUTHENTICATE
} from '../contants';


export function authenticate (user) {
  const request = axios.post(`${API_URL}authenticate`, user);

  return {
    type: AUTHENTICATE,
    payload: request
  };
}


export function register (user) {
  const request = axios.post(`${API_URL}register`, user);

  return {
    type: REGISTER,
    payload: request
  };
}


export function unauthenticate (user) {
  const request = axios.post(`${API_URL}unauthenticate/${user}`);

  return {
    type: UNAUTHENTICATE,
    payload: request
  };
}
