/*
* Event form component
 */


import { Link } from 'react-router';
import { propTypes } from '../../props';
import Address from '../shared/address-shared.jsx';
import { EVENTS_ROUTE } from '../../contants';
import FormInput from '../form-input-component.jsx';


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
        satuts,
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
        field={status}
        label='Status'
        type='text'
      />


      <Address {...address} />



      <button type='submit' className='btn btn-primary'>Send</button>

      <Link to={`${EVENTS_ROUTE}/${selectedEvent}`} className='btn btn-danger'>Cancel</Link>
    </form>;
  }
}


// Vaidate proptypes
EventForm.propTypes = propTypes;

export default EventForm;
