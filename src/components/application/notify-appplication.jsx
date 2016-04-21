/*
* Notifications commponent
 */


import UiKitAlert from 'react-uikit-alert';

const Notify = (props) => (
  <UiKitAlert show context='danger'>
    To indicate success or a positive message add the <code>context='success'</code> prop.
  </UiKitAlert>
);

export default Notify;
