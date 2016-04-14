/*
* Authorisation contaier
 */

'use strict';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import actions from '../actions';

import { propTypes, mapStateToProps } from '../helpers';

export default function(ComposedClass, redirect) {

  class IsAuthuthoried extends React.Component{
    componentWillMount () {
      if(!this.props.isLoggedIn) {
        const path = redirect || '/';

        browserHistory.push(path);
      }
    }

    render () {
      return <ComposedClass {...this.props}/>;
    }
  }

  IsAuthuthoried.propTypes = propTypes;

  return connect(mapStateToProps)(IsAuthuthoried);
}
