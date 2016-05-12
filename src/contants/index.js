/*
* Aplication constants
 */

// API
export const API_URL = 'http://localhost:3000/api/v01/';


// Public routes
export const ABOUT_ROUTE = '/about';
export const CONTACTS_ROUTE = '/contacts';

export const CATEGORIES_ROUTE = '/categories';
export const CATEGORY_ROUTE = '/category';
export const CATEGORY_EDIT_ROUTE = '/category/edit';
export const CATEGORY_NEW_ROUTE = '/category/new';

export const EVENTS_ROUTE = '/events';
export const EVENT_ROUTE = '/event';
export const EVENT_EDIT_ROUTE = '/event/edit';
export const EVENT_NEW_ROUTE = '/event/new';

export const MY_ACCOUNT_ROUTE = 'my-account';
export const ROOT_ROUTE = '/';
export const SEVICES_ROUTE = '/sevices';
export const SIGNIN_ROUTE = '/signin';
export const SIGNOUT_ROUTE = '/signout';
export const SIGNUP_ROUTE = '/signup';
export const USERS_ROUTE= '/users';
export const USER_EDIT_ROUTE = '/user/edit';


// Application action types
export const DELETE_STORAGE = 'DELETE_STORAGE';
export const GET_STORAGE = 'GET_STORAGE';
export const LOCATION = 'LOCATION';
export const LOGGEDIN = 'LOGGEDIN';
export const SET_STORAGE = 'SET_STORAGE';


// Storage actions types
export const AUTHENTICATE = 'AUTHENTICATE';
export const UNAUTHENTICATE = 'UNAUTHENTICATE';


// Authentication actions types
export const REGISTER = 'REGISTER';


// Event action types
export const CREATE_EVENT = 'CREATE_EVENT';
export const EVENTS_CALENDAR_DATE = 'EVENTS_CALENDAR_DATE';
export const GET_EVENTS = 'GET_EVENTS';
export const GET_EVENT = 'GET_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT';
export const REMOVE_EVENT_FROM_LIST = 'REMOVE_EVENT_FROM_LIST';
export const SELECT_EVENT = 'SELECT_EVENT';
export const SET_EVENTS = 'SET_EVENTS';
export const SET_EVENT = 'SET_EVENT';
export const UPDATE_EVENT = 'UPDATE_EVENT';


// Event action types
export const GET_CATEGORY = 'GET_COURSE';
export const GET_CATEGORIES = 'GET_COURSES';
export const GET_COLORS = 'GET_COLORS';
export const REMOVE_CATEGORY = 'REMOVE_COURSE';
export const REMOVE_CATEGORY_FROM_LIST = 'REMOVE_COURSE_FROM_LIST';
export const SELECT_CATEGORY = 'SELECT_COURSE';
export const SET_CATEGORY = 'SET_COURSE';
export const SET_CATEGORIES = 'SET_COURSES';
export const SET_COLOR = 'SET_COLOR';
export const SET_COLORS = 'GET_COLORS';
export const UPDATE_CATEGORY = 'UPDATE_COURSE';


// User action types
export const GET_USERS = 'GET_USERS';
export const GET_USER = 'GET_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const REMOVE_USER_FROM_LIST = 'REMOVE_USER_FROM_LIST';
export const SET_USERS = 'SET_USERS';
export const SET_USER = 'SET_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const SELECT_USER = 'SELECTED_USER';
