/*
* Event form component
 */


import { Link } from 'react-router';
import Address from '../shared/address-shared.jsx';
import Datetime from 'react-datetime';
import { EVENTS_ROUTE } from '../../contants';
import Form from 'react-uikit-form';
import FormInput from 'react-uikit-form/lib/form-input';
import Modal from 'react-uikit-modal';
import TextEditor from '../shared/text-editor-component.jsx';
import moment from 'moment';
import velocity from 'velocity-animate';


class EventForm extends React.Component {
  constructor(props) {
    super(props);

    this.animateIn = this.animateIn.bind(this);
    this.animateOut = this.animateOut.bind(this);
  }


  componentWillMount() {
    const { initializeForm, event } = this.props;
    initializeForm({
      ...event,
      start: moment(event.start),
      end  : moment(event.end)
    });
  }


  animateIn (modal, dialog) {
    velocity(modal, {opacity: 1}, {display: 'block'}, 300);
    velocity(dialog, {translateY: 1, opacity: 1}, {display: 'block'}, 200);
  }


  animateOut (modal, dialog) {
    velocity(modal, {opacity:0}, { display: 'none' }, 300);
    velocity(dialog, {translateY: -100, opacity: 0}, { display: 'none' }, 200);
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


    return <Form layout='stacked' onSubmit={onSubmit}>
      <h3>{heading}</h3>

      <FormInput
        {...title}
        label='Event title'
        type='text'
      />

      <label className="uk-form-label">Starting</label>
      <Datetime {...start} />

      <label className="uk-form-label">Ending</label>
      <Datetime {...end} />

      <FormInput
        {...enrolled}
        label='Enrolled'
        type='text'
      />

      <FormInput
        field={attended}
        label='Attended'
        type='text'
      />

      <Modal
        close
        trigger={{
          body: 'Category',
          animate: {
            'in': (modal, dialog) => this.animateIn(modal, dialog),
            out: (modal, dialog) => this.animateOut(modal, dialog)
          }
        }}
      >
        <FormInput
          {...category}
          label='Category'
          type='text'
        />

        <h2>Headline</h2>
        <p>
          hello
        </p>
      </Modal>


      <label className="uk-form-label">About</label>
      <TextEditor {...this.props}/>

      <button type='submit' className='btn btn-primary'>Send</button>

      <Link to={`${EVENTS_ROUTE}/${selectedEvent}`} className='btn btn-danger'>Cancel</Link>
    </Form>;
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
