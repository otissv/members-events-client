/*
* Event form component
 */


import { Link } from 'react-router';
import Address from '../shared/address-shared.jsx';
import { EVENTS_ROUTE } from '../../contants';
import FormInput from '../form-input-component.jsx';
import TextEditor from '../shared/text-editor-component.jsx';

class EventForm extends React.Component {
  componentWillMount() {
    const { initializeForm, event } = this.props;
    initializeForm(event);
  }


  render () {
    const {
      fields: {
        ...address,
        attended,
        duration,
        enrolled,
        start,
        title
      },
      heading,
      selectedEvent,
      onChange,
      onSubmit
    } = this.props;


    return <form className="uk-form uk-form-stacked" onSubmit={onSubmit}>
      <h3>{heading}</h3>

      <FormInput
        field={title}
        label='Event title'
        type='text'
      />

      <FormInput
        field={start}
        label='start'
        type='text'
      />

      <FormInput
        field={duration}
        label='Duration'
        type='text'
      />

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
      
      <Address {...address} />

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
