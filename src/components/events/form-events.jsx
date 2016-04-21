/*
* Event form component
 */


import { Link } from 'react-router';
import { propTypes } from '../../props';
import Address from '../shared/address-shared.jsx';
import { EVENTS_ROUTE } from '../../contants';

class EventForm extends React.Component {
  componentWillMount() {
    const { initializeForm, event } = this.props;
    initializeForm(event);
  }


  render () {
    const {
      fields: {
        ...address,
        title
      },
      heading,
      selectedEvent,
      onChange,
      onSubmit
    } = this.props;


    return <form className="uk-form uk-form-stacked" onSubmit={onSubmit}>
      <h3>{heading}</h3>

      <div className="uk-form-row">
        <label className="uk-form-label" >Eventname</label>
        <div className="uk-form-controls">
          <input type='text'
            className={`form-group ${title.touched && title.invalid ? 'uk-form-danger' : ''}`}
            {...title}
          />
        </div>

        <div className='uk-text-danger'>
        {title.touched ? title.error : ''}
        </div>
      </div>



      <button type='submit' className='btn btn-primary'>Send</button>

      <Link to={`${EVENTS_ROUTE}/${selectedEvent}`} className='btn btn-danger'>Cancel</Link>
    </form>;
  }
}


// Vaidate proptypes
EventForm.propTypes = propTypes;

export default EventForm;
