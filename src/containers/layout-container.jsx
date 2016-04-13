/*
* Layout contaier
 */

'use strict';
import { connect } from 'react-redux';
import actions from '../../actions';
import Layout from '../components/application/layout-application.jsx';


export default function(ComposedClass, redirect) {
  class LayoutContainer extends React.Component  {
    componentWillMount () {
      // this.props.getStorge(['_id', 'token']);
    }

    render () {
      return <Layout />;
    }
  }

  function mapStateToProps (state) {
    return {
      storage : state.storage,
      isLoggedIn: state.auth.isLoggedIn
    };
  }


  return connect(mapStateToProps, {
    getStorge : actions.getStorge
  })(LayoutContainer);
}
