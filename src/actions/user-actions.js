/*
* User Action
*/


'use strict';
import axios from 'axios';
import {
  arrayToObject,
  deleteKeyToArray,
  query
} from '../helpers';

import {
  API_URL,
  DELETE_USER,
  REMOVE_FROM_LIST_USER,
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
  const usersList = arrayToObject(users);

  return {
    type: SET_USERS,
    payload: usersList('_id', 'user_')
  };
}


export function getUser (_id, token, user) {
  const request = axios.get(`${API_URL}users/${user}/${query(_id, token)}`);

  return {
    type: GET_USER,
    payload: request
  };
}


export function removeUserFromList (usersAll, key) {
  const userList = arrayToObject(deleteKeyToArray(usersAll, key));


  return {
    type: REMOVE_FROM_LIST_USER,
    payload: userList('_id', 'user_')
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
