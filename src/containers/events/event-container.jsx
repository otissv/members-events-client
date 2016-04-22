/*
* Event container
 */


import { connect } from 'react-redux';
import actions from '../../actions';
import { mapStateToProps } from '../../reducers';
import Events from '../../components/events/view-events.jsx';


class EventContainer extends React.Component{
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

  render () {
    return <Events {...this.props}/>;
  }
}

EventContainer.propTypes = {
  getEvent  : React.PropTypes.func.isRequired,
  eventSelected: React.PropTypes.string.isRequired,
  setEvent  : React.PropTypes.func.isRequired,
  storage: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, actions)(EventContainer);
