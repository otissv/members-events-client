/*
* Event Action
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
  REMOVE_EVENT,
  REMOVE_EVENT_FROM_LIST,
  GET_EVENT,
  GET_EVENTS,
  SELECT_EVENT,
  SET_EVENT,
  SET_EVENTS,
  UPDATE_EVENT
} from '../contants';


export function removeEvent (_id, token, event) {
  const request = axios.delete(`${API_URL}events/${event}/${query(_id, token)}`);

  return {
    type: REMOVE_EVENT,
    payload: request
  };
}


export function getEvents (_id, token) {
  const request = axios.get(`${API_URL}events/${query(_id, token)}`);

  return {
    type: GET_EVENTS,
    payload: request
  };
}

export function setEvents (events) {
  const eventsList = arrayToObject(events);

  return {
    type: SET_EVENTS,
    payload: eventsList('_id', 'event_')
  };
}


export function getEvent (_id, token, event) {
  const request = axios.get(`${API_URL}events/${event}/${query(_id, token)}`);

  return {
    type: GET_EVENT,
    payload: request
  };
}


export function removeEventFromList (list, keyName) {
  const eventList = arrayToObject(deleteKeyToArray(list, keyName));

  return {
    type: REMOVE_EVENT_FROM_LIST,
    payload: eventList('_id', 'event_')
  };
}


export function selectEvent (eventId) {
  return {
    type: SELECT_EVENT,
    payload: eventId
  };
}


export function setEvent (event) {
  return {
    type: SET_EVENT,
    payload: event
  };
}


export function updateEvent (_id, token, event, data) {
  const request = axios.put(`${API_URL}events/${event}/${query(_id, token)}`, data);

  return {
    type: UPDATE_EVENT,
    payload: request
  };
}
