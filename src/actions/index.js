/*
* Aplication actions
 */

'use strcit';

import * as user from './user-actions';
import * as auth from './auth-actions';
import * as storage from './storage-actions';

export default {
  ...auth,
  ...storage,
  ...user
};
