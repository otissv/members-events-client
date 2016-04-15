/*
* Layout component
 */

'use strict';
import { propTypes } from '.././../helpers';

import Navigation from './navigation-application.jsx';
import Alert from './alert-appplication.jsx';
import Notify from './notify-appplication.jsx';


export default class Layout extends React.Component  {
  componentWillMount () {
    this.props.getStorage();
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

Layout.propTypes = propTypes;
