/*
* Edit Category component
 */


import AuthForm from './form-categories.jsx';


import { CATEGORIES_ROUTE } from '../../contants';


export default class EditCategory extends React.Component  {
  constructor (props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (data) {
    const {
      categorySelected,
      storage,
      redirectTo,
      updateCategory
    } = this.props;

    const { _id, token } =  storage;

    updateCategory(_id, token, categorySelected, data).payload
      .then(response => {
        redirectTo(`${CATEGORIES_ROUTE}/${categorySelected}`);
      });
  }

  handleChange(e) {

  }


  render () {
    const { handleSubmit } = this.props;
    return <AuthForm
      onSubmit={handleSubmit(this.handleSubmit)}
      {...this.props}
      heading='Edit Category'
      onChange={this.handleChange}
      />;
  }
}


EditCategory.propTypes = {
  categorySelected: React.PropTypes.string.isRequired,
  redirectTo   : React.PropTypes.func.isRequired,
  storage      : React.PropTypes.object.isRequired,
  updateCategory  : React.PropTypes.func.isRequired,
  handleSubmit : React.PropTypes.func.isRequired
};
