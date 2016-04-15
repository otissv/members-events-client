/*
* Authorisation sign out
 */


'use strict';

import { propTypes } from '../.././helpers';


export default class Signout extends React.Component{
 componentDidMount () {
   const {
     getStorage,
     deleteStorage,
     loggedIn,
     storage,
     redirectTo,
     unauthenticate
   } = this.props;

    deleteStorage();
    loggedIn(false);

    // Check to see if storage has data else get cookie
    const result = storage || getStorage().payload;
    unauthenticate(result._id);

    redirectTo('/');
 }

 render () {
   return <div>
   Logging out...
   </div>;
 }
}


Signout.propTypes = propTypes;
