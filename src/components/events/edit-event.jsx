/*
* Authorisation sign in
 */
'use strict';

import AuthForm from './form-events.jsx';
import { propTypes } from '../../props';

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
      heading='Edit User'
      onChange={this.handleChange}
      />;
  }
}

// Vaidate proptypes
EditUser.propTypes = propTypes;
