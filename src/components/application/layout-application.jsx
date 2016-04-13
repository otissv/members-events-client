/*
* Application layout
 */

'use strict';
import Navigation from './navigation-application.jsx';
import Alert from './alert-appplication.jsx';
import Notify from './notify-appplication.jsx';


export default class Layout extends React.Component  {
  render () {
    return <div>
      <Alert/>
      <Notify/>
      <Navigation/>
      { this.props.children }
    </div>;
  }
}


Layout.propTypes = {
  isLoggedIn: React.PropTypes.bool,
  children: React.PropTypes.any
};
