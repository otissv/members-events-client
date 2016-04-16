/*
* User Action
*/


'use strict';
import axios from 'axios';
import { query, arrayToObject } from '../helpers';

import {
  API_URL,
  DELETE_USER,
  GET_USER,
  GET_USERS,
  SELECT_USER,
  SET_USER,
  SET_USERS,
  UPDATE_USER
} from '../contants';


export function deleteUsers (_id, token, user) {
  const request = axios.delete(`${API_URL}users/${user}/${query(_id, token)}`);

  return {
    type: DELETE_USER,
    payload: request
  };
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
    payload: arrayToObject(users, '_id')
  };
}


export function getUser (_id, token, user) {
  const request = axios.get(`${API_URL}users/${user}/${query(_id, token)}`);

  return {
    type: GET_USER,
    payload: request
  };
}


export function selectUser (userId) {
  return {
    type: SELECT_USER,
    payload: userId
  };
}


export function setUser (user) {
  return {
    type: SET_USER,
    payload: user
  };
}


export function updateUser (_id, token, user, data) {
  const request = axios.put(`${API_URL}users/${user}/${query(_id, token)}`, data);

  return {
    type: UPDATE_USER,
    payload: request
  };
}
