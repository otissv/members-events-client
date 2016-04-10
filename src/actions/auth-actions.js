/*
* Authorisation actions
 */
'use strict';
import axios from 'axios';

import {
  ROOT_URL,
  REGISTER
} from '../contants';


export function register (props) {
  const request = axios.post(`${ROOT_URL}register`, props);

  return {
    type: REGISTER,
    payload: request
  };
}
