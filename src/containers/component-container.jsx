/*
* Authorisation contaier
 */

'use strict';
import { connect } from 'react-redux';
import actions from '../actions';

import { propTypes, mapStateToProps } from '../helpers';

export default function(ComposedClass, redirect) {

  class Container extends React.Component{
    render () {
      return <ComposedClass {...this.props}/>;
    }
  }

  Container.propTypes = propTypes;

  return connect(mapStateToProps, actions)(Container);
}
