/*
* Authorisation sign out
 */


 'use strict';
 import { connect } from 'react-redux';
 import { browserHistory } from 'react-router';
import actions from '../actions';


 class Singout extends React.Component{
   componentDidMount () {
     const {
       getStorage,
       deleteStorage,
       storage,
       unauthenticate
     }  = this.props;

      const result = storage || getStorage().payload;
      console.log(result)
      deleteStorage();
      unauthenticate(result._id);
      // redirect to home
      browserHistory.push('/');

   }

   render () {
     return <div>
     Logging out...
     </div>;
   }
 }


Singout.propTypes = {
   getStorage    : React.PropTypes.func,
   loggedIn      : React.PropTypes.bool,
   deleteStorage : React.PropTypes.func,
   storage       : React.PropTypes.func,
   unauthenticate: React.PropTypes.func
 };

function mapStateToProps(state){
  return {
    getStorage: state.auth.storage,
    loggedIn: state.loggedIn

  };
}

export default connect(mapStateToProps, {
  getStorage : actions.getStorage,
  deleteStorage: actions.deleteStorage,
  unauthenticate: actions.unauthenticate
})(Singout);
