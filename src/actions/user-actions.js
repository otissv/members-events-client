/*
* User Action
*/


'use strict';
import axios from 'axios';

import {
  ROOT_URL,
  GET_USERS,
  GET_USER,
  DELETE_USER
} from '../contants';


const API_KEY = '?key=sdjkflsdjflsdjftert';


export function fetchUsers () {
  const request = axios.get(`${ROOT_URL}posts${API_KEY}`);

  return {
    type: GET_USERS,
    payload: request
  };
}

export function fetchUser (id) {
  const request = axios.get(`${ROOT_URL}posts/${id}${API_KEY}`);

  return {
    type: GET_USER,
    payload: request
  };
}


export function deletePost (id) {
  const request = axios.delete(`${ROOT_URL}posts/${id}${API_KEY}`);

  return {
    type: DELETE_USER,
    payload: request
  };
}
