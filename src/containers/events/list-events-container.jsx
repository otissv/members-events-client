/*
* List events container
 */


import { connect } from 'react-redux';
import actions from '../../actions';

import { mapStateToProps } from '../../props';
import Events from '../../components/events/list-events.jsx';


class EventsContainer extends React.Component{
  componentWillMount () {
    const {
      getEvents,
      setEvents,
      storage } = this.props;

    const { _id, token } = storage;

    getEvents(_id, token).payload
      .then(response => {
        setEvents(response.data.result);
      });
  }

  render () {
    return <Events {...this.props} />;
  }
}


EventsContainer.propTypes = {
  getEvents: React.PropTypes.func.isRequired,
  setEvents: React.PropTypes.func.isRequired,
  storage  : React.PropTypes.func.isRequired
};

export default connect(mapStateToProps, actions)(EventsContainer);
