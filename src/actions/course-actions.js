/*
* Course Action
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
  REMOVE_COURSE,
  REMOVE_COURSE_FROM_LIST,
  GET_COURSE,
  GET_COURSES,
  SELECT_COURSE,
  SET_COURSE,
  SET_COURSES,
  UPDATE_COURSE
} from '../contants';


export function removeCourse (_id, token, course) {
  const request = axios.delete(`${API_URL}courses/${course}/${query(_id, token)}`);

  return {
    type: REMOVE_COURSE,
    payload: request
  };
}


export function getCourses (_id, token) {
  const request = axios.get(`${API_URL}courses/${query(_id, token)}`);

  return {
    type: GET_COURSES,
    payload: request
  };
}

export function setCourses (courses) {
  const coursesList = arrayToObject(courses);

  return {
    type: SET_COURSES,
    payload: coursesList('_id', 'course_')
  };
}


export function getCourse (_id, token, course) {
  const request = axios.get(`${API_URL}courses/${course}/${query(_id, token)}`);

  return {
    type: GET_COURSE,
    payload: request
  };
}


export function removeCourseFromList (list, keyName) {
  const courseList = arrayToObject(deleteKeyToArray(list, keyName));

  return {
    type: REMOVE_COURSE_FROM_LIST,
    payload: courseList('_id', 'course_')
  };
}


export function selectCourse (courseId) {
  return {
    type: SELECT_COURSE,
    payload: courseId
  };
}


export function setCourse (course) {
  return {
    type: SET_COURSE,
    payload: course
  };
}


export function updateCourse (_id, token, course, data) {
  const request = axios.put(`${API_URL}courses/${course}/${query(_id, token)}`, data);

  return {
    type: UPDATE_COURSE,
    payload: request
  };
}
