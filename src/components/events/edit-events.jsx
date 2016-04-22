/*
* Edit Event component
 */


import AuthForm from './form-events.jsx';


import { EVENTS_ROUTE } from '../../contants';


export default class EditUser extends React.Component  {
  constructor (props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (data) {
    const {
      eventSelected,
      storage,
      redirectTo,
      updateEvent
    } = this.props;

    const { _id, token } =  storage;

    updateEvent(_id, token, eventSelected, data).payload
      .then(response => {
        redirectTo(`${EVENTS_ROUTE}/${eventSelected}`);
      });
  }

  handleChange(e) {

  }


  render () {
    const { handleSubmit } = this.props;
    return <AuthForm
      onSubmit={handleSubmit(this.handleSubmit)}
      {...this.props}
      heading='Edit Event'
      onChange={this.handleChange}
      />;
  }
}


EditUser.propTypes = {
  eventSelected: React.PropTypes.string.isRequired,
  redirectTo   : React.PropTypes.func.isRequired,
  storage      : React.PropTypes.object.isRequired,
  updateEvent  : React.PropTypes.func.isRequired,
  handleSubmit : React.PropTypes.func.isRequired
};
