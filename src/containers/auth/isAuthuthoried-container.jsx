/*
* Authorisation contaier
 */

'use strict';
import { connect } from 'react-redux';
import actions from '../../actions';

import { propTypes, mapStateToProps } from '../../helpers';

export default function(ComposedClass, redirect) {

  class IsAuthuthoried extends React.Component {
    constructor (props) {
      super(props);

      this.ComponentClass = props.isLoggedIn ? <ComposedClass {...this.props}/> : <div/>;
    }

    componentWillMount () {
      const { isLoggedIn, redirectTo } = this.props;

      if(!isLoggedIn) {
        const path = redirect || '/';
        redirectTo(path);
      }
    }

    render () {
      return this.ComponentClass;
    }
  }

  IsAuthuthoried.propTypes = propTypes;

  return connect(mapStateToProps, actions)(IsAuthuthoried);
}
