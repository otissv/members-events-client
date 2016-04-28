/*
* List events component
*/


import BigCalendar from 'react-big-calendar';
import moment from 'moment';
// import events from './events.js';
import { objectToArray } from '../../helpers';

 // Setup the localizer by providing the moment (or globalize) Object
 // to the correct localizer.
BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

export default class Events extends React.Component {
  constructor (props) {
    super(props);
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
      onSelectEvent={event => alert(
        `Tilte: ${event.title}\n` +
        `Start: ${event.start}\n` +
        `End: ${event.end}\n` +
        `Description: ${event.description}`
      )}
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
}
