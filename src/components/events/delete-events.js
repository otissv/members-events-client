/*
* Delete event component
*/

import { EVENTS_ROUTE } from 'contants';

export default function deleteEvent(props) {
  const {
    removeEventFromList,
    removeEvent,
    selectEvent,
    eventSelected,
    setEvent,
    storage,
    redirectTo,
    eventsAll
  } = props;

  const { _id, token } = storage;

  removeEvent(_id, token, eventSelected).payload
    .then(response => {
      if(!response.data.success) {
        console.log(response.data.message);
      }

      removeEventFromList(eventsAll, eventSelected);
      setEvent({});
      selectEvent(null);
      redirectTo(EVENTS_ROUTE);
    });
}
