/*
* List events component
*/


import { objectToArray } from '../../helpers';
import { propTypes } from '../../props';
import { Link } from 'react-router';


import { EVENTS_ROUTE } from '../../contants';


class Events extends React.Component {
  constructor (props) {
    super(props);

    this.handleSetEvent =  this.handleSetEvent.bind(this);
  }


  handleSetEvent (e) {
    const memId = e.target.dataset.memid;

    this.props.selectEvent(memId);
  }


  render () {
    const items = objectToArray(this.props.eventsAll).map(item => {
      return <li key={item._id}>
        <Link
          data-memId={item._id}
          onClick={this.handleSetEvent}
          to={`${EVENTS_ROUTE}/${item._id}`}
        >
          {item.title}
        </Link>
      </li>;
    });


    return <div>
      <h1>Events</h1>
      <ul>{items}</ul>
    </div>;
  }
}

export default Events;


Events.propTypes = propTypes;