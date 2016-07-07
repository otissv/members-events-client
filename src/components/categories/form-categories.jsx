/*
* Category form component
 */


import { Link } from 'react-router';
import { CATEGORIES_ROUTE } from 'contants';
import Form from 'react-uikit-form';
import FormInput from 'react-uikit-form/lib/form-input';
import Modal from 'react-uikit-modal';
import List from 'react-uikit-list';
import velocity from 'velocity-animate';
import ListItemSelect from '../shared/list-item-select-shared';
import TextEditor from '../shared/text-editor-component.jsx';

class CategoryForm extends React.Component {
  constructor (props) {
    super(props);

    this.state= { show: false };
  }

  componentWillMount() {
    const {
      initializeForm,
      category,
      getCategoryColors,
      setCategoryColors,
      storage
    } = this.props;
    const { _id, token } = storage;

    this.handleColorClick = this.handleColorClick.bind(this);
    this.swatchAnimateIn = this.swatchAnimateIn.bind(this);
    this.swatchAnimateOut= this.swatchAnimateOut.bind(this);

    initializeForm(category);

    getCategoryColors(_id, token).payload
      .then(response => {
        setCategoryColors(response.data.result);
      });
  }


  swatchAnimateIn (modal, dialog) {
    this.setState({ show: true });
    velocity(modal, {opacity: 1}, {display: 'block'}, 300);
    velocity(dialog, {translateY: 1, opacity: 1}, {display: 'block'}, 200);
  }

  swatchAnimateOut (modal, dialog) {
    this.setState({ show: false });
    velocity(modal, {opacity:0}, { display: 'none' }, 300);
    velocity(dialog, {translateY: -100, opacity: 0}, { display: 'none' }, 200);
  }

  handleColorClick (e) {
    const { index, kitid } = e.item;
    const id = kitid.split('.')[0];

    const modal = document.querySelector(`[data-kitid='modal-${id}']`);
    const dialog = document.querySelector(`[data-kitid='dialog-${id}']`);

    this.swatchAnimateOut(modal, dialog);

    this.props.fields.color.onChange(index);
  }

  render () {
    const {
      fields: {
        color,
        status,
        students,
        title
      },
      categorySelected,
      categoryColor,
      categoryColorsAll,
      heading,
      onChange,
      onSubmit
    } = this.props;

    const modalId = 'swatches';

    const categoryList = Object.keys(categoryColorsAll).map((key) => {
      return <ListItemSelect
       kitid={`${modalId}.${key}`}
       index={key}
       body={key}
       data-category={key}
       icon={{
         style: {color: categoryColorsAll[key]},
         className: 'uk-icon-circle'
       }}
       key={key}
       onClick={this.handleColorClick}
      />;
    });


    return <Form className="uk-form uk-form-stacked" onSubmit={onSubmit}>
      <h3>{heading}</h3>

      <FormInput
        {...title}
        label='Category title'
        type='text'
      />

      <FormInput
        {...students}
        label='Students'
        type='text'
      />

      <FormInput
        {...status}
        label='Status'
        type='text'
      />

      <Modal
        show={this.state.show}
        kitid={modalId}
        close
        trigger={{
          kitid: modalId,
          type: 'div',
          display: 'inlineBlock',
          body: <FormInput
            {...color}
            label='Color'
            input={{
              id : 'color',
              name:'color',
              type:'text'
            }}
          />,
          animate: {
            'in': (modal, dialog) => this.swatchAnimateIn(modal, dialog),
            out: (modal, dialog) => this.swatchAnimateOut(modal, dialog)
          }
        }}
      >
        <List>
          {categoryList}
        </List>
      </Modal>

      <span className='uk-form-label'>Comments</span>
      <div style={{border: '1px solid #ddd', marginBottom: '15px', borderRadius: '4px', minHeight: '30px'}}>
        <TextEditor {...this.props}/>
      </div>

      <button type='submit' className='btn btn-primary'>Save</button>

      <Link to={`${CATEGORIES_ROUTE}/${categorySelected}`} className='btn btn-danger'>Cancel</Link>
    </Form>;
  }
}


CategoryForm.propTypes = {
  category         : React.PropTypes.object.isRequired,
  categoryColor    : React.PropTypes.string.isRequired,
  categoryColorsAll: React.PropTypes.object.isRequired,
  fields           : React.PropTypes.object.isRequired,
  getCategoryColors: React.PropTypes.func.isRequired,
  heading          : React.PropTypes.string,
  initializeForm   : React.PropTypes.func.isRequired,
  categorySelected : React.PropTypes.string,
  onChange         : React.PropTypes.func.isRequired,
  onSubmit         : React.PropTypes.func.isRequired,
  setCategoryColors: React.PropTypes.func.isRequired,
  storage          : React.PropTypes.object.isRequired
};

export default CategoryForm;
