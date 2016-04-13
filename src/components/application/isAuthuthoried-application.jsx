/*
* Authorisation component
 */

'use strict';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';


export default function(ComposedClass, redirect) {

  class IsAuthuthoried extends React.Component{
    componentWillMount(){
      if(!this.props.loggedIn) {
        const path = redirect || '/';

        browserHistory.push(path);
      }
    }

    render () {
      return <ComposedClass {...this.props}/>;
    }
  }

  function mapStateToProps(state){
    return {
      loggedIn : state.auth.isLoggedIn
    };
  }

  IsAuthuthoried.propTypes = {
    loggedIn: React.PropTypes.bool
  };

  return connect(mapStateToProps)(IsAuthuthoried);
}
