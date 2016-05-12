/*
* Category form component
 */


import { Link } from 'react-router';
import { CATEGORIES_ROUTE } from '../../contants';
import FormInput from '../form-input-component.jsx';
import Modal from '../../../../react-uikit-components/components/react-uikit-modal';
import List from 'react-uikit-list';
import Listitem from 'react-uikit-list';
import velocity from 'velocity-animate';


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
    e.preventDefault();
    const { color } = e.target.dataset;

    this.props.fields.color.onChange(color);
    this.setState({ show: false });
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

    return <form className="uk-form uk-form-stacked" onSubmit={onSubmit}>
      <h3>{heading}</h3>

      <FormInput
        field={title}
        label='Category title'
        type='text'
      />

      <FormInput
        field={students}
        label='Students'
        type='text'
      />

      <FormInput
        field={status}
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
            field={color}
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
          {Object.keys(categoryColorsAll).map(key => {
            return <a
              href="#" key={key}
              onClick={this.handleColorClick}
            >
              <Listitem kitid={`modal-${modalId}`} data-color={key}>
                <i style={{color: categoryColorsAll[key]}} className="uk-icon-circle"></i> {key}
              </Listitem>
              </a>;
          })}
        </List>
      </Modal>

      <button type='submit' className='btn btn-primary'>Save</button>

      <Link to={`${CATEGORIES_ROUTE}/${categorySelected}`} className='btn btn-danger'>Cancel</Link>
    </form>;
  }
}


CategoryForm.propTypes = {
  category         : React.PropTypes.object.isRequired,
  categoryColor    : React.PropTypes.string.isRequired,
  categoryColorsAll: React.PropTypes.object.isRequired,
  fields           : React.PropTypes.object.isRequired,
  heading          : React.PropTypes.string,
  initializeForm   : React.PropTypes.func.isRequired,
  categorySelected : React.PropTypes.string,
  onChange         : React.PropTypes.func.isRequired,
  onSubmit         : React.PropTypes.func.isRequired
};

export default CategoryForm;
