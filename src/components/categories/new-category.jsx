/*
* New Category component
 */


import AuthForm from './form-categories';
import { CATEGORIES_ROUTE } from '../../contants';

export default class NewUser extends React.Component  {
  constructor (props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (data) {
    const {
      storage,
      redirectTo,
      createCategory
    } = this.props;

    const { _id, token } =  storage;

    createCategory(_id, token, data).payload
      .then(response => {
        redirectTo(CATEGORIES_ROUTE);
      });
  }

  handleChange(e) {

  }


  render () {
    const { handleSubmit } = this.props;
    return <AuthForm
      onSubmit={handleSubmit(this.handleSubmit)}
      {...this.props} category={{}}
      heading='New Category'
      onChange={this.handleChange}
      />;
  }
}


NewUser.propTypes = {
  redirectTo   : React.PropTypes.func.isRequired,
  storage      : React.PropTypes.object.isRequired,
  createCategory  : React.PropTypes.func.isRequired,
  handleSubmit : React.PropTypes.func.isRequired
};
