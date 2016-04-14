/*
* Layout contaier
 */

'use strict';
import { connect } from 'react-redux';
import actions from '../actions';

import Navigation from '../components/application/navigation-application.jsx';
import Alert from '../components/application/alert-appplication.jsx';
import Notify from '../components/application/notify-appplication.jsx';

class LayoutContainer extends React.Component  {
  componentWillMount () {
    const { getStorage } = this.props;

    getStorage();
  }
    render () {
      return <div>
        <Alert {...this.props}/>
        <Notify {...this.props}/>
        <Navigation  {...this.props}/>

        { this.props.children }

      </div>;
    }
  }

function mapStateToProps (state) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    storage: state.auth.storage
  };
}


LayoutContainer.propTypes = {
  children  : React.PropTypes.any,
  getStorage: React.PropTypes.func
};


export default connect(mapStateToProps, {
  getStorage : actions.getStorage,
  unauthenticate: actions.unauthenticate
})(LayoutContainer);
