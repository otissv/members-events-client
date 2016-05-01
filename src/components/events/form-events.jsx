/*
* Event form component
 */


import { Link } from 'react-router';
import Address from '../shared/address-shared.jsx';
import Datetime from 'react-datetime';
import { EVENTS_ROUTE } from '../../contants';
import FormInput from '../form-input-component.jsx';
import TextEditor from '../shared/text-editor-component.jsx';
import moment from 'moment';

class EventForm extends React.Component {
  componentWillMount() {
    const { initializeForm, event } = this.props;
    initializeForm({
      ...event,
      start: moment(event.start),
      end  : moment(event.end)
    });
  }


  render () {
    const {
      fields: {
        ...address,
        attended,
        category,
        end,
        enrolled,
        start,
        title
      },
      heading,
      selectedEvent,
      onSubmit
    } = this.props;


    return <form className="uk-form uk-form-stacked" onSubmit={onSubmit}>
      <h3>{heading}</h3>

      <FormInput
        field={title}
        label='Event title'
        type='text'
      />

      <label className="uk-form-label">Starting</label>
      <Datetime {...start} />

      <label className="uk-form-label">Ending</label>
      <Datetime {...end} />

      <FormInput
        field={enrolled}
        label='Enrolled'
        type='text'
      />

      <FormInput
        field={attended}
        label='Attended'
        type='text'
      />

      <FormInput
        field={category}
        label='Category'
        type='text'
      />


      <label className="uk-form-label">About</label>
      <TextEditor {...this.props}/>

      <button type='submit' className='btn btn-primary'>Send</button>

      <Link to={`${EVENTS_ROUTE}/${selectedEvent}`} className='btn btn-danger'>Cancel</Link>
    </form>;
  }
}

EventForm.propTypes = {
  event         : React.PropTypes.object.isRequired,
  fields        : React.PropTypes.object.isRequired,
  heading       : React.PropTypes.string,
  initializeForm: React.PropTypes.func.isRequired,
  selectedEvent : React.PropTypes.string,
  onChange      : React.PropTypes.func.isRequired,
  onSubmit      : React.PropTypes.func.isRequired
};

export default EventForm;
