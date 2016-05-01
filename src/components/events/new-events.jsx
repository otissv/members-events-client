/*
* New Event component
 */


import AuthForm from './form-events';
import { EVENTS_ROUTE } from '../../contants';

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
      createEvent
    } = this.props;

    const { _id, token } =  storage;

    createEvent(_id, token, data).payload
      .then(response => {
        redirectTo(EVENTS_ROUTE);
      });
  }

  handleChange(e) {

  }


  render () {
    const { handleSubmit } = this.props;
    return <AuthForm
      onSubmit={handleSubmit(this.handleSubmit)}
      {...this.props} event={{}}
      heading='New Event'
      onChange={this.handleChange}
      />;
  }
}


NewUser.propTypes = {
  redirectTo   : React.PropTypes.func.isRequired,
  storage      : React.PropTypes.object.isRequired,
  // updateEvent  : React.PropTypes.func.isRequired,
  handleSubmit : React.PropTypes.func.isRequired
};
