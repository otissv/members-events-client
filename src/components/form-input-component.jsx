
const FormInpunt = (props) => {
	const {
		field,
		label,
		type,
	} = props;

	return <div className="uk-form-row">
      <label className="uk-form-label" >{label}</label>
      <div className="uk-form-controls">
        <input type={type}
          className={`form-group ${field.touched && field.invalid ? 'uk-form-danger' : ''}`}
          {...field}
        />
      </div>

      <div className='uk-text-danger'>
      {field.touched ? field.error : ''}
      </div>
    </div>
}

export default FormInpunt;