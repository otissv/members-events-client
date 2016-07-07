/*
* Event form component
 */


import { Link } from 'react-router';
import Address from '../shared/address-shared.jsx';
import Datetime from 'react-datetime';
import { EVENTS_ROUTE } from 'contants';
import Form from 'react-uikit-form';
import FormInput from 'react-uikit-form/lib/form-input';
import Button from 'react-uikit-button';
import List from 'react-uikit-list';
import Invited from './invited-events';
import Modal from 'react-uikit-modal';
import TextEditor from '../shared/text-editor-component.jsx';
import moment from 'moment';
import velocity from 'velocity-animate';
import ListItemSelect from '../shared/list-item-select-shared';


class EventForm extends React.Component {
  constructor(props) {
    super(props);

    this.animateIn = this.animateIn.bind(this);
    this.animateOut = this.animateOut.bind(this);
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
    this.handleAddClientsClick = this.handleAddClientsClick.bind(this);


    this.state = {
      show: false,
      eventCategortTitle: props.event.category ? props.event.category.title : 'Category'
    };
  }


  componentWillMount() {
    const {
      event,
      getCategories,
      initializeForm,
      setCategories,
      storage
    } = this.props;

    const { _id, token } = storage;

    initializeForm({
      ...event,
      start: moment(event.start),
      end  : moment(event.end)
    });

    getCategories(_id, token).payload
      .then(response => {
        setCategories(response.data.result);
      });
  }


  animateIn (modal, dialog) {
    this.setState({ show: true });
    velocity(modal, {opacity: 1}, {display: 'block'}, 300);
    velocity(dialog, {translateY: 1, opacity: 1}, {display: 'block'}, 200);
  }


  animateOut (modal, dialog) {
    this.setState({ show: false });
    velocity(modal, {opacity:0}, { display: 'none' }, 300);
    velocity(dialog, {translateY: -100, opacity: 0}, { display: 'none' }, 200);
  }


  handleCategoryClick (e) {
    const { index, kitid } = e.item;
    const id = kitid.split('.')[0];

    const categoryDataset= document.querySelector(`[data-kitid='categories.${index}']`).dataset.category;

    const category = JSON.parse(categoryDataset);
    const modal = document.querySelector(`[data-kitid='modal-${id}']`);
    const dialog = document.querySelector(`[data-kitid='dialog-${id}']`);


    this.setState({ eventCategortTitle: category.title });
    this.animateOut(modal, dialog);
    this.props.fields.category._id.onChange(category._id);
  }


  handleAddClientsClick (invited) {
    invited.addField();
  }


  render () {
    const {
      event,
      fields: {
        ...address,
        category,
        end,
        invited,
        start,
        title
      },
      heading,
      selectedEvent,
      onSubmit,
      categoriesAll
    } = this.props;

    const modalId = 'categories';

    const categoryList = Object.keys(categoriesAll).map(key => {
      const dataCategory = {
        _id:  categoriesAll[key]._id,
        title:  categoriesAll[key].title
      };


      return <ListItemSelect
       kitid={`${modalId}.${key}`}
       body={categoriesAll[key].title}
       data-category={JSON.stringify(dataCategory)}
       icon={{
         style: {color: categoriesAll[key].color},
         className: 'uk-icon-circle'
       }}
       key={key}
       onClick={this.handleCategoryClick}
      />;
    });

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

      <span className='uk-form-label'>Clients</span>
      <Button
        body='Add Client'
        type="button" onClick={() => this.handleAddClientsClick(invited)}
      />
      <Invited clients={invited} invitees={event.invited}/>


      <div {...category}>
      <FormInput
        {...category._id}
        label='Category'
        input={{
          id : 'color',
          name:'color',
          type:'text'
        }}
      />
      </div>


      <Modal
        show={this.state.show}
        kitid={modalId}
        close
        trigger={{
          body: this.state.eventCategortTitle,
          animate: {
            'in': (modal, dialog) => this.animateIn(modal, dialog),
            out: (modal, dialog) => this.animateOut(modal, dialog)
          }
        }}
      >

       <List>
         {categoryList}
       </List>
      </Modal>


      <Address {...address} />

      <span className='uk-form-label'>Comments</span>
      <div style={{border: '1px solid #ddd', marginBottom: '15px', borderRadius: '4px', minHeight: '30px'}}>
      <TextEditor {...this.props}/>
      </div>

      <button type='submit' className='btn btn-primary'>Send</button>

      <Link to={`${EVENTS_ROUTE}/${selectedEvent}`} className='btn btn-danger'>Cancel</Link>
    </Form>;
  }
}

EventForm.propTypes = {
  categoriesAll : React.PropTypes.object,
  event         : React.PropTypes.object.isRequired,
  getCategories : React.PropTypes.func.isRequired,
  fields        : React.PropTypes.object.isRequired,
  heading       : React.PropTypes.string,
  initializeForm: React.PropTypes.func.isRequired,
  selectedEvent : React.PropTypes.string,
  onChange      : React.PropTypes.func.isRequired,
  onSubmit      : React.PropTypes.func.isRequired,
  setCategories : React.PropTypes.func.isRequired,
  storage       : React.PropTypes.object.isRequired
};

export default EventForm;
