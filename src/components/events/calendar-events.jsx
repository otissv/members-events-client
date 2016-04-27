/*
* Calandar Event component
 */


import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from './events';

 // Setup the localizer by providing the moment (or globalize) Object
 // to the correct localizer.
BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);


const EventCalendar = props => (
 <div>
   <BigCalendar
     events={events}
     selectable
     startAccessor='start'
     endAccessor='end'
     defaultDate={new Date(2015, 3, 1)}
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
   />
 </div>
);

export default EventCalendar;
