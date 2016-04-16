/*
* User Action
*/


'use strict';
import axios from 'axios';

import {
  API_URL,
  GET_USERS,
  GET_USER,
  SET_USERS,
  DELETE_USER
} from '../contants';


function query (_id, token) {
  return `?_id=${_id}&token=${token}`;
}

export function getUsers (_id, token) {
  const request = axios.get(`${API_URL}users/${query(_id, token)}`);

  return {
    type: GET_USERS,
    payload: request
  };
}

export function setUsers (users) {
  return {
    type: SET_USERS,
    payload: users
  };
}

export function getUser (_id, token) {
  const request = axios.get(`${API_URL}users/${query(_id, token)}`);

  return {
    type: GET_USER,
    payload: request
  };
}


export function deleteUsers (_id, token) {
  const request = axios.delete(`${API_URL}users/${query(_id, token)}`);

  return {
    type: DELETE_USER,
    payload: request
  };
}
