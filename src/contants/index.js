/*
* Aplication constants
 */

// API
export const API_URL = 'http://localhost:3000/api/v01/';

// routes
export const ABOUT = '/about';
export const CONTACTS = '/contacts';
export const COURSES = 'courses';
export const COURSE = '/courses/:courseId';
export const COURSE_EDIT = '/courses/edit/:courseId';
export const EVENTS = '/events';
export const EVENT = '/events/:eventId';
export const EVENT_EDIT = '/events/edit/:eventId';
export const MY_ACCOUNT = 'my-account';
export const ROOT = '/';
export const SEVICES = '/sevices';
export const SIGNIN = '/signin';
export const SIGNOUT = '/signout';
export const SIGNUP = '/signup';
export const USERS= '/users';
export const USER = '/users/:userId';
export const USER_EDIT = '/users/edit/:userId';

// Application types
export const DELETE_STORAGE = 'DELETE_STORAGE';
export const GET_STORAGE = 'GET_STORAGE';
export const LOCATION = 'LOCATION';
export const LOGGEDIN = 'LOGGEDIN';
export const REMOVE_FROM_LIST_USER = 'REMOVE_FROM_LIST_USER';
export const SELECT_USER = 'SELECTED_USER';
export const SET_STORAGE = 'SET_STORAGE';


// Storage actions types
export const AUTHENTICATE = 'AUTHENTICATE';
export const UNAUTHENTICATE = 'UNAUTHENTICATE';


// Authentication actions types
export const REGISTER = 'REGISTER';

// Event action types
export const GET_EVENTS = 'GET_EVENTS';
export const GET_EVENT = 'GET_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';
export const SET_EVENTS = 'SET_EVENTS';
export const SET_EVENT = 'SET_EVENT';
export const UPDATE_EVENT = 'UPDATE_EVENT';


// Event action types
export const GET_COURSES = 'GET_COURSES';
export const GET_COURSE = 'GET_COURSE';
export const DELETE_COURSE = 'DELETE_COURSE';
export const SET_COURSES = 'SET_COURSES';
export const SET_COURSE = 'SET_COURSE';
export const UPDATE_COURSE = 'UPDATE_COURSE';


// User action types
export const GET_USERS = 'GET_USERS';
export const GET_USER = 'GET_USER';
export const DELETE_USER = 'DELETE_USER';
export const SET_USERS = 'SET_USERS';
export const SET_USER = 'SET_USER';
export const UPDATE_USER = 'UPDATE_USER';
