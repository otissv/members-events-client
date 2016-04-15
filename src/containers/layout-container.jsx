/*
* Layout contaier
 */

'use strict';
import { connect } from 'react-redux';
import actions from '../actions';
import { propTypes, mapStateToProps } from '../helpers';

import Navigation from '../components/application/navigation-application.jsx';
import Alert from '../components/application/alert-appplication.jsx';
import Notify from '../components/application/notify-appplication.jsx';


class LayoutContainer extends React.Component  {
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

LayoutContainer.propTypes = propTypes;


export default connect(mapStateToProps, actions)(LayoutContainer);
