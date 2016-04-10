/*
* Application notifications
 */
'use strict';

import UiKitAlert from 'react-uikit-alert';

const Alert = (props) => (
  <UiKitAlert show context='danger'>
    To indicate success or a positive message add the <code>context='success'</code> prop.
  </UiKitAlert>
);

export default Alert;
