/*
* Aplication actions
 */

'use strcit';
import * as application from './application-actions';
import * as auth from './auth-actions';
import * as user from './user-actions';


export default {
	...application,
  ...auth,
  ...user
};
