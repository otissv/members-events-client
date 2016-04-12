/*
* Application layout
 */

'use strict';
import { connect } from 'react-redux';
import LoggedIn from './loggedIn-application.jsx';
import NotLoggedIn from './NoLoggedIn-application.jsx';
import Alert from './alert-appplication.jsx';
import Notify from './notify-appplication.jsx';
import actions from '../../actions';


class Layout extends React.Component  {
  componentWillMount () {
    // this.props.getStorge(['_id', 'token']);
  }

  render () {
    // console.log(this.props.storage);
    return <div>
      <Alert/>
      <Notify/>
      { this.props.isLoggedIn ? <LoggedIn/> : <NotLoggedIn/> }
      { this.props.children }
    </div>;
  }
}


Layout.propTypes = {
  isLoggedIn: React.PropTypes.bool,
  children: React.PropTypes.any,
  getStorge: React.PropTypes.func
};


function mapStateToProps (state) {
  return {
    storage : state.storage,
    isLoggedIn: state.auth.isLoggedIn
  };
}


export default connect(mapStateToProps, {
  getStorge : actions.getStorge
})(Layout);
