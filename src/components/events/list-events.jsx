/*
* List events component
*/


import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import { objectToArray } from 'helpers';
import { Link } from 'react-router';
import {
  EVENTS_ROUTE,
  EVENT_NEW_ROUTE
} from 'contants';

 // Setup the localizer by providing the moment (or globalize) Object
 // to the correct localizer.
BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

export default class Events extends React.Component {
  constructor (props) {
    super(props);

    this.handleSelectEvent = this.handleSelectEvent.bind(this);
    this.handleSelectEventSlot = this.handleSelectEventSlot.bind(this);
  }


  handleSelectEvent(event) {
    const _id = event._id;
    const { redirectTo, selectEvent } = this.props;

    selectEvent(_id);
    redirectTo(`${EVENTS_ROUTE}/${_id}`);
  }


  handleSelectEventSlot(slotInfo) {
    const { redirectTo, setEventSlot } = this.props;

    setEventSlot(slotInfo);
    redirectTo(EVENT_NEW_ROUTE);
  }


  render () {
    const { eventsAll, eventsCalendarDate } = this.props;

    const events = objectToArray(eventsAll).map(item => item);

    return <div>

      <Link to={EVENT_NEW_ROUTE}>New event</Link>

      <BigCalendar
        events={events}
        selectable
        startAccessor='start'
        endAccessor='end'
        defaultDate={eventsCalendarDate}
        onSelectEvent={this.handleSelectEvent}
        onSelectSlot={this.handleSelectEventSlot}
      />
    </div>;
  }
}


Events.propTypes = {
  // shouldUpdate
  eventsAll: React.PropTypes.object.isRequired,
  eventsCalendarDate: React.PropTypes.object.isRequired,

  // actions
  setEventSlot: React.PropTypes.func.isRequired,
  redirectTo: React.PropTypes.func.isRequired,
  selectEvent: React.PropTypes.func.isRequired
};
