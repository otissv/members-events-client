/*
* Authorisation sign out
 */


 'use strict';
import { connect } from 'react-redux';
import actions from '../actions';
import { propTypes, mapStateToProps } from '../helpers';


class Singout extends React.Component{
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


Singout.propTypes = propTypes;


export default connect(mapStateToProps, actions)(Singout);
