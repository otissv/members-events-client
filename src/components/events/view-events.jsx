/*
* View event component
*/

import {
  EVENTS_ROUTE,
  EVENT_EDIT_ROUTE
} from 'contants';

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
    const {
      event,
      eventSelected,
      status,
      when
    } = this.props;

    let invited;
    if (event.invited) {
      invited = event.invited.map((invite) => {

        const { _id, firstName, lastName } = invite.client;
        return <li key={_id}>
          {`${firstName} ${lastName}`}
        </li>;
      });
    }
    return <div>
      <h1>Event Profile</h1>
      Name    : {event.title}<br />
      Category: {event.category ? event.category.title : ''}<br />
      When    : {when}<br />
      Status  : {status}<br />

      Clients:
      <ul>
        {invited}
      </ul>


      Location:
      Adddres1: {event.address ? event.address.address1 : ''} <br />
      Adddres2: {event.address ? event.address.address2: ''}<br />
      City    : {event.address ? event.address.city : ''}<br />
      State   : {event.address ? event.address.state : ''}<br />
      Postcode: {event.address ? event.address.postcode : ''}<br />

      Comments:<br />

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
