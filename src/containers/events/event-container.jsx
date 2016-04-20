/*
* Authorisation contaier
 */

'use strict';
import { connect } from 'react-redux';
import actions from '../../actions';

import { propTypes, mapStateToProps } from '../../props';
import Events from '../../components/events/event-events.jsx';


class EventContainer extends React.Component{
  componentWillMount () {
    const {
      getEvent,
      eventSelected,
      setEvent,
      storage
    } = this.props;

    const { _id, token } = storage;

    getEvent(_id, token, eventSelected).payload
      .then(response => {
        setEvent(response.data.result);
      });
  }

  render () {
    return <Events {...this.props}/>;
  }
}

EventContainer.propTypes = propTypes;

export default connect(mapStateToProps, actions)(EventContainer);
