/*
* View event component
*/

import {
  EVENTS_ROUTE,
  EVENT_EDIT_ROUTE
} from '../../contants';

import { propTypes } from '../../props';
import { Link } from 'react-router';
import deleteEvent from './delete-events';

class Event extends React.Component {
  constructor (props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    deleteEvent(this.props);
  }

  render () {
    const { event, eventSelected } = this.props;

    return <div>
      <h1>Event Profile</h1>
      Name    : {event.title}<br />
      Attended: {event.attended}<br />
      Duration: {event.duration}<br />
      Enrolled: {event.enrolled}<br />
      Start   : {event.start}<br />
      Satuts  : {event.satuts}<br />


      Adddres1: {event.address ? event.address.address1 : ''} <br />
      Adddres2: {event.address ? event.address.address2: ''}<br />
      City    : {event.address ? event.address.city : ''}<br />
      State   : {event.address ? event.address.state : ''}<br />
      Postcode: {event.address ? event.address.postcode : ''}<br />


      <Link to={EVENTS_ROUTE} >Back</Link>
      <Link to={`${EVENT_EDIT_ROUTE}/${eventSelected}`} >Edit</Link>
      <a href='#' onClick={this.handleDelete}>Detele</a>
    </div>;
  }

}

export default Event;


Event.propTypes = propTypes;
