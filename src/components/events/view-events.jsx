/*
* View event component
*/

import {
  EVENTS_ROUTE,
  EVENT_EDIT_ROUTE
} from '../../contants';

import { Link } from 'react-router';
import deleteEvent from './delete-events';
import moment from 'moment';


// const eventStatus(end) {
//   if (moment(event.end).format() < moment().format()) {
//     status = 'Ended';
//   } else if (moment(event.start).format() < moment().format()) {
//     status = 'In progres';
//   } else {
//     status = 'Not started';
//   }
// };

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
    const { event, eventSelected, status, when } = this.props;

    return <div>
      <h1>Event Profile</h1>
      Name    : {event.title}<br />
      When    : {when}<br />
      Status  : {status}<br />

      Going   : {event.enrolled}<br />
      Invited :
      Attended: {event.attended}<br />


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


Event.propTypes = {
  event        : React.PropTypes.object.isRequired,
  eventSelected: React.PropTypes.string.isRequired,
  status       : React.PropTypes.string.isRequired,
  when         : React.PropTypes.string.isRequired
};
