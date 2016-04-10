/*
* Application layout
 */

'use strict';

import Navigation from './navigation-application.jsx';
import Alert from './alert-appplication.jsx';
import Notify from './notify-appplication.jsx';


const Layout = (props) => (
  <div>
    <Alert/>
    <Notify/>
    <Navigation />
    { props.children }
  </div>
);

Layout.propTypes = {
  children: React.PropTypes.any
};


export default Layout;
