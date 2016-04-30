/*
* List events component
*/


import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import { objectToArray } from '../../helpers';

import { EVENTS_ROUTE } from '../../contants';

 // Setup the localizer by providing the moment (or globalize) Object
 // to the correct localizer.
BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

export default class Events extends React.Component {
  constructor (props) {
    super(props);

    this.handleSelectEvent = this.handleSelectEvent.bind(this);
  }


  handleSelectEvent(event) {
    const _id = event._id;
    const { redirectTo, selectEvent } = this.props;

    selectEvent(_id);
    redirectTo(`${EVENTS_ROUTE}/${_id}`);
  }


  render () {
    const { eventsAll, eventsCalendarDate } = this.props;

    const events = objectToArray(eventsAll).map(item => item);

    return <BigCalendar
      events={events}
      selectable
      startAccessor='start'
      endAccessor='end'
      defaultDate={eventsCalendarDate}
      onSelectEvent={this.handleSelectEvent}
      onSelectSlot={(slotInfo) => alert(
         `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
         `\nend: ${slotInfo.end.toLocaleString()}`
       )}
    />;
  }
}


Events.propTypes = {
  // events: React.PropTypes.object.isRequired,
  // eventsCalendarDate: React.PropTypes.string.isRequired
};
