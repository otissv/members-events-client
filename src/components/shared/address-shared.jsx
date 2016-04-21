/*
* Address Component
*/

import { propTypes } from '../../props';
import FormInput from '../form-input-component.jsx';

const Address = (props) => {
  const { address1, address2, city, state, postcode } = props.address;

  return <div>

    <FormInput
      field={address1}
      label='Address 1'
      type='text'
    />
    <FormInput
      field={address2}
      label='Address 2'
      type='text'
    />

    <FormInput
      field={city}
      label='City'
      type='text'
    />

    <FormInput
      field={state}
      label='State'
      type='text'
    />

    <FormInput
      field={postcode}
      label='Postcode'
      type='text'
    />

  </div>;
};


Address.propTypes = propTypes;


export default Address;
