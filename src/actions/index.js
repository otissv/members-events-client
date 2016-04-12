/*
* Aplication actions
 */

'use strcit';

import * as user from './user-actions';
import * as auth from './auth-actions';

export default {
  ...auth,
  ...user
};
