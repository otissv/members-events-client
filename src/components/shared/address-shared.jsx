'use strict';

import { propTypes } from '../../props';


const Address = (props) => {
  const { address1, address2, city, state, postcode } = props.address;

  return <div>
    <div className="uk-form-row">
      <label className="uk-form-label" >Address 1</label>
      <div className="uk-form-controls">
        <input type='text'
          className={`form-group ${address1.touched && address1.invalid ? 'uk-form-danger' : ''}`}
          {...address1}
        />
      </div>

      <div className='uk-text-danger'>
      {address1.touched ? address1.error : ''}
      </div>
    </div>

    <div className="uk-form-row">
      <label className="uk-form-label" >Address 2</label>
      <div className="uk-form-controls">
        <input type='text'
          className={`form-group ${address2.touched && address2.invalid ? 'uk-form-danger' : ''}`}
          {...address2}
        />
      </div>

      <div className='uk-text-danger'>
      {address2.touched ? address2.error : ''}
      </div>
    </div>

    <div className="uk-form-row">
      <label className="uk-form-label" >City</label>
      <div className="uk-form-controls">
        <input type='text'
          className={`form-group ${city.touched && city.invalid ? 'uk-form-danger' : ''}`}
          {...city}
        />
      </div>

      <div className='uk-text-danger'>
      {city.touched ? city.error : ''}
      </div>
    </div>

    <div className="uk-form-row">
      <label className="uk-form-label" >State</label>
      <div className="uk-form-controls">
        <input type='text'
          className={`form-group ${state.touched && state.invalid ? 'uk-form-danger' : ''}`}
          {...state}
        />
      </div>

      <div className='uk-text-danger'>
      {state.touched ? state.error : ''}
      </div>
    </div>

    <div className="uk-form-row">
      <label className="uk-form-label" >Post Code</label>
      <div className="uk-form-controls">
        <input type='text'
          className={`form-group ${postcode.touched && postcode.invalid ? 'uk-form-danger' : ''}`}
          {...postcode}
        />
      </div>

      <div className='uk-text-danger'>
      {postcode.touched ? postcode.error : ''}
      </div>
    </div>
  </div>;
};


Address.propTypes = propTypes;


export default Address;


{/*<div className="uk-form-row">
  <label className="uk-form-label" >Address 1</label>
  <div className="uk-form-controls">
    <input type='text'
      className={`form-group ${address1.touched && address1.invalid ? 'uk-form-danger' : ''}`}
      {...address1}
    />
  </div>

  <div className='uk-text-danger'>
  {address1.touched ? address1.error : ''}
  </div>
</div>;*/}
