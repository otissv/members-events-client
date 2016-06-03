/*
* New User component
 */


import AuthForm from './form-users';
import { USERS_ROUTE } from 'contants';

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
      createUser
    } = this.props;

    const { _id, token } =  storage;

    createUser(_id, token, data).payload
      .then(response => {
        redirectTo(USERS_ROUTE);
      });
  }

  handleChange(e) {

  }


  render () {
    const { handleSubmit } = this.props;
    return <AuthForm
      onSubmit={handleSubmit(this.handleSubmit)}
      {...this.props} user={{}}
      heading='New User'
      onChange={this.handleChange}
    />;
  }
}


NewUser.propTypes = {
  redirectTo   : React.PropTypes.func.isRequired,
  storage      : React.PropTypes.object.isRequired,
  createUser  : React.PropTypes.func.isRequired,
  handleSubmit : React.PropTypes.func.isRequired
};
