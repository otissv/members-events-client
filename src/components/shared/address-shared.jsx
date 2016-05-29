/*
* Address Component
*/


import FormInput from 'react-uikit-form/lib/form-input';

const Address = (props) => {
  const { address1, address2, city, state, postcode } = props.address;

  return <div>

    <FormInput
      {...address1}
      label='Address 1'
      type='text'
    />
    <FormInput
      {...address2}
      label='Address 2'
      type='text'
    />

    <FormInput
      {...city}
      label='City'
      type='text'
    />

    <FormInput
      {...state}
      label='State'
      type='text'
    />

    <FormInput
      {...postcode}
      label='Postcode'
      type='text'
    />

  </div>;
};


Address.propTypes = {
  address: React.PropTypes.object.isRequired
};


export default Address;
