/*
* Authorisation sign out
 */


 'use strict';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import actions from '../actions';
import { propTypes, mapStateToProps } from '../helpers';


class Singout extends React.Component{
 componentDidMount () {
   const {
     getStorage,
     deleteStorage,
     storage,
     unauthenticate
   } = this.props;
   console.log(this.props)
   //  deleteStorage();
   //  loggedIn(false);

   //  // chect to see if storage has data else get cookie
   //  const result = storage || getStorage().payload;
 		// unauthenticate(result._id);

   //  // redirect to home
   //  browserHistory.push('/');

 }

 render () {
   return <div>
   Logging out...
   </div>;
 }
}


Singout.propTypes = propTypes;


export default connect(mapStateToProps, actions)(Singout);
