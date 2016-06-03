/*
* Event container
 */


import { connect } from 'react-redux';
import actions from 'actions';
import { mapStateToProps } from 'reducers';
import Event from 'components/events/view-events.jsx';
import moment from 'moment';


class EventContainer extends React.Component{
  constructor(props) {
    super(props);

    this.when = this.when.bind(this);
    this.status = this.status.bind(this);
  }


  componentWillMount () {
    const {
      getEvent,
      eventSelected,
      setEvent,
      storage
    } = this.props;

    const { _id, token } = storage;

    getEvent(_id, token, eventSelected).payload
      .then(response => {
        setEvent(response.data.result);
      });
  }


  when () {
    const { event } = this.props;

    const starts = moment(event.start);
    const ends = moment(event.end);
    const duration = moment.duration(ends.diff(starts)).asDays();
    const TimeFormat = 'h:mm A';
    const calendarFormat = {
      sameElse: `MMMM Do YYYY ${TimeFormat}`
    };

    return duration > 1
      ? `${starts.calendar(null, calendarFormat)} - ${ends.calendar(null, calendarFormat)}`
      : `${starts.calendar(null, calendarFormat)} - ${ends.format(TimeFormat)}`;
  }


  status () {
    const { event } = this.props;

    const now =  moment();
    const starts = moment(event.start);
    const ends = moment(event.end);

    if (ends.format() < now.format()) {
      return status = `Ended ${ends.fromNow()}`;

    } else if (starts.format() < now.format()) {
      return status = `Started ${starts.fromNow()}`;

    } else {
      return status = 'Not started';
    }
  }


  render () {
    return <Event {...this.props} when={this.when()} status={this.status()}/>;
  }
}


EventContainer.propTypes = {
  event        : React.PropTypes.object.isRequired,
  getEvent     : React.PropTypes.func.isRequired,
  eventSelected: React.PropTypes.string.isRequired,
  setEvent     : React.PropTypes.func.isRequired,
  storage      : React.PropTypes.object.isRequired
};


export default connect(mapStateToProps, actions)(EventContainer);
