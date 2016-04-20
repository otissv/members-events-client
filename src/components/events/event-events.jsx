'use strict';


import {
  EVENTS_ROUTE,
  EVENT_EDIT_ROUTE
} from '../../contants';

import { propTypes } from '../../props';
import { Link } from 'react-router';

class Event extends React.Component {
  constructor (props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    const {
      removeEventFromList,
      deleteEvent,
      selectEvent,
      eventSelected,
      setEvent,
      storage,
      redirectTo,
      eventsAll
    } = this.props;

    const { _id, token } = storage;

    deleteEvent(_id, token, eventSelected).payload
      .then(response => {
        // if(!response.data.success) {
        //   console.log(response.data.message);
        // }
        // console.log(response.data.success);
        // removeEventFromList(eventsAll, eventSelected);
        // setEvent({});
        // selectEvent(null);
        // redirectTo(EVENTS_ROUTE);
      });
  }

  render () {
    const { event, eventSelected } = this.props;

    return <div>
      <h1>Event Profile</h1>
      Name: {event.title}<br />


      <Link to={EVENTS_ROUTE} >Back</Link>
      <Link to={`${EVENT_EDIT_ROUTE}/${eventSelected}`} >Edit</Link>
      <a href='#' onClick={this.handleDelete}>Detele</a>
    </div>;
  }

}

export default Event;


Event.propTypes = propTypes;
